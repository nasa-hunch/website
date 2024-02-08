import { formHandler } from '$lib/bodyguard.js';
import { Role } from '$lib/enums.js';
import { prisma } from '$lib/prismaConnection';
import { verifySession } from '$lib/verifySession.js';
import { z } from 'zod';

export const load = async () => {
	const userList = await prisma.user.findMany();
	const orgList = await prisma.organization.findMany({});
	return {
		userList: userList.map((user) => ({
			id: user.id,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			role: user.role,
			orgId: user.orgId
		})),
		orgList
	};
};

export const actions = {
	verifyUser: formHandler(
		z.object({
			id: z.coerce.number(),
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
	)
};
