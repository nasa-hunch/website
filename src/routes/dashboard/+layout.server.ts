import { prisma } from '$lib/prismaConnection';
import { Role } from '@prisma/client';
import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	// if the user isn't logged in, we need to redirect them to the login page
	const session = cookies.get('session');
	if (!session) {
		throw redirect(303, '/login');
	}

	const sessionCheck = await prisma.session.findFirst({
		where: {
			sessionText: session
		},
		include: {
			user: {
				include: {
					organization: true,
					projectUser: {
						include: {
							project: true
						}
					},
				}
			}
		}
	});

	// We have a valid session!
	if (!sessionCheck || !sessionCheck.user) {
		throw redirect(303, '/login');
	}

	const user = sessionCheck.user;
	if (user.role == null) {
		// we need more info from the user
		throw redirect(303, '/more-info');
	}

	if (user.orgId == null && user.role != Role.HUNCH_ADMIN) {
		if (user.projectUser.length == 0) {
			throw redirect(303, '/more-info');
		} else {
			// error recovery: if the user has a projectUser but no orgId, set the orgId to the project's orgId
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
			id: user.id,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			role: user.role,
			projectUser: user.projectUser,
			orgId: user.orgId ?? user.projectUser[0].project.orgId,
		}
	};
};
