import { redirect } from '@sveltejs/kit';

import { Role } from '$lib/enums';
import { prisma } from '$lib/server/prisma/prismaConnection';

export const load = async ({ cookies }) => {
	// If the user isn't logged in, we need to redirect them to the login page
	const session = cookies.get('session');
	if (!session) {
		redirect(303, '/login');
	}

	const sessionCheck = await prisma.session.findFirst({
		where: {
			sessionText: session
		},
		include: {
			user: {
				select: {
					organization: {
						select: {
							id: true,
							name: true
						}
					},
					projectUser: {
						include: {
							project: {
								include: {
									projectTemplate: {
										select: {
											name: true
										}
									}
								}
							}
						}
					},
					id: true,
					createdAt: true,
					updatedAt: true,
					firstName: true,
					lastName: true,
					email: true,
					pfp: true,
					role: true,
					orgId: true,
					sessions: {
						select: {
							createdAt: true,
							lastUsed: true,
							ip: true,
							userAgent: true,
							sessionText: true
						}
					}
				}
			}
		}
	});

	// We have a valid session!
	if (!sessionCheck || !sessionCheck.user) {
		redirect(303, '/login');
	}

	const user = sessionCheck.user;
	if (user.role == null) {
		// We need more info from the user
		redirect(303, '/more-info');
	}

	if (user.orgId == null && user.role != Role.HUNCH_ADMIN) {
		if (user.projectUser.length == 0) {
			redirect(303, '/more-info');
		} else {
			// Error recovery: if the user has a projectUser but no orgId, set the orgId to the project's orgId
			await prisma.user.update({
				where: {
					id: user.id
				},
				data: {
					orgId: user.projectUser[0].project.orgId
				}
			});
		}
	}

	return {
		user: {
			...user,
			sessions: user.sessions.map((session) => ({
				...session,
				sessionText: sessionCheck.sessionText == session.sessionText ? 'current' : 'not'
			})),
			role: user.role,
			orgId: user.role == Role.HUNCH_ADMIN ? null : user.orgId ?? user.projectUser[0].project.orgId
		}
	};
};
