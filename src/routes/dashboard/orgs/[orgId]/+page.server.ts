import { error } from '@sveltejs/kit';
import { z } from 'zod';

import { Role } from '$lib/enums';
import { formHandler } from '$lib/server/bodyguard.js';
import { prisma } from '$lib/server/prisma/prismaConnection.js';
import { verifySession } from '$lib/server/verifySession';

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

export const actions = {
	update: formHandler(
		z.object({
			name: z.string().min(1)
		}),
		async ({ name }, { params, cookies }) => {
			await verifySession(cookies, Role.HUNCH_ADMIN, Role.SCHOOL_ADMIN);

			await prisma.organization.update({
				where: {
					id: parseInt(params.orgId)
				},
				data: {
					name
				}
			});

			return {
				success: true,
				message: 'Organization updated'
			};
		}
	)
};
