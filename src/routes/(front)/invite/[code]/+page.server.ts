import { createId } from '@paralleldrive/cuid2';
import { error, redirect } from '@sveltejs/kit';

import { prisma } from '$lib/server/prisma/prismaConnection.js';
import { verifySessionOptional } from '$lib/server/verifySession.js';

export const load = async ({ params, cookies }) => {
	const user = await verifySessionOptional(cookies);

	const invite = await prisma.invite.findUnique({
		where: {
			joinCode: params.code,
			OR: [
				{
					toId: null
				},
				...(user ? [{ toId: user.id }] : [])
			],
			used: false
		},
		include: {
			from: {
				select: {
					firstName: true,
					lastName: true,
					pfp: true
				}
			},
			to: {
				select: {
					id: true
				}
			},
			organization: {
				select: {
					name: true
				}
			}
		}
	});

	if (!invite) error(404, 'Invite not found');

	return {
		invite
	};
};

export const actions = {
	acceptInvite: async ({ params, cookies }) => {
		const invite = await prisma.invite.findUnique({
			where: {
				joinCode: params.code,
				to: null,
				used: false
			}
		});

		if (!invite) error(404, 'Invite not found');

		const session = await verifySessionOptional(cookies);

		if (!session) redirect(302, `/login?code=${invite.joinCode}`);

		await prisma.invite.update({
			where: {
				joinCode: params.code
			},
			data: {
				to: {
					connect: {
						id: session.id
					}
				}
			}
		});

		if (invite.role === 'HUNCH_ADMIN' || invite.role === 'STUDENT') {
			await prisma.$transaction([
				prisma.invite.update({
					where: {
						joinCode: params.code
					},
					data: {
						used: true
					}
				}),
				prisma.user.update({
					where: {
						id: session.id
					},
					data: {
						role: invite.role,
						...(invite.orgId
							? {
									organization: {
										connect: {
											id: invite.orgId
										}
									}
							  }
							: {}),
						...(invite.projectId
							? {
									projectUser: {
										create: {
											id: createId(),
											projectId: invite.projectId,
											permission: 'NEEDS_APPROVAL'
										}
									}
							  }
							: {})
					}
				})
			]);

			redirect(302, '/dashboard');
		}
	}
};
