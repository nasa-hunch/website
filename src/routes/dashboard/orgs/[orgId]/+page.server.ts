import { error } from '@sveltejs/kit';

import { prisma } from '$lib/server/prisma/prismaConnection.js';

export const load = async ({ params, parent }) => {
	const data = await parent();

	if (data.user.role !== 'HUNCH_ADMIN' && data.user.orgId !== parseInt(params.orgId))
		error(404, 'Organization not found');

	const org = await prisma.organization.findUnique({
		where: {
			id: parseInt(params.orgId)
		},
		include: {
			users: {
				select: {
					id: true,
					firstName: true,
					lastName: true,
					email: true,
					role: true,
					pfp: true
				}
			},
			projects: {
				include: {
					projectTemplate: true,
					users: {
						select: {
							user: {
								select: {
									id: true,
									firstName: true,
									lastName: true,
									pfp: true
								}
							}
						}
					}
				}
			}
		}
	});

	if (!org) error(404, 'Organization not found');

	return {
		org
	};
};
