import { createId } from '@paralleldrive/cuid2';
import { z } from 'zod';

import { Role } from '$lib/enums.js';
import { formHandler } from '$lib/server/bodyguard.js';
import { prisma } from '$lib/server/prisma/prismaConnection';
import { verifySession } from '$lib/server/verifySession.js';

export const load = async ({ url }) => {
	const filters: { [key: string]: unknown } = {};

	const perPage = parseInt(url.searchParams.get('perPage') || '25');

	let page = parseInt(url.searchParams.get('page') || '1');

	const roleParam = url.searchParams.get('role') || 'null';
	if (roleParam) {
		if (Object.keys(Role).includes(roleParam.toUpperCase())) {
			filters.role = roleParam.toUpperCase();
		}
	}

	const totalUsers = await prisma.user.count({
		where: filters
	});
	const totalPages = Math.ceil(totalUsers / perPage);

	// A little odd, but ensures we don't end up on a page which does not exist
	page = page > totalPages ? totalPages : page;
	page = page < 1 ? 1 : page;

	const userList = await prisma.user.findMany({
		skip: perPage * (page - 1),
		take: perPage,
		select: {
			id: true,
			createdAt: true,
			updatedAt: true,
			firstName: true,
			lastName: true,
			email: true,
			role: true,
			orgId: true
		},
		where: filters,
		orderBy: {
			id: 'asc'
		}
	});

	const orgList = await prisma.organization.findMany();
	return {
		userList,
		orgList,
		sortMeta: {
			perPage,
			page,
			totalUsers,
			totalPages
		}
	};
};

export const actions = {
	verifyUser: formHandler(
		z.object({
			id: z.string(),
			orgId: z.coerce.number()
		}),
		async ({ id, orgId }, { cookies }) => {
			await verifySession(cookies, Role.HUNCH_ADMIN);

			await prisma.user.update({
				where: {
					id
				},
				data: {
					role: Role.TEACHER,
					orgId
				}
			});

			return {
				success: true,
				message: 'Teacher Verified'
			};
		}
	),
	inviteUser: formHandler(
		z.object({
			role: z.string(),
			organization: z.string().optional().nullable()
		}),
		async ({ role, organization }, { cookies }) => {
			const user = await verifySession(cookies, Role.HUNCH_ADMIN);

			const invite = await prisma.invite.create({
                data: {
                    id: createId(),
                    role: role as Role,
                    ...(organization ? { orgId: parseInt(organization) } : {}),
                    fromId: user.id,
                    form: '',
                    joinCode: Math.floor(Math.random() * 1000000).toString()
                }
            });

            return {
                success: true,
                message: 'Invite generated',
                invite
            };
		}
	)
};
