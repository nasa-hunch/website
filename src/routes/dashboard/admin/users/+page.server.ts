import { prisma } from '$lib/prismaConnection';

export const load = async ({ cookies }) => {
	const userList = await prisma.user.findMany();
	return {
		userList: userList.map(user => ({
			id: user.id,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			role: user.role,
			orgId: user.orgId
		}))
	};
};
