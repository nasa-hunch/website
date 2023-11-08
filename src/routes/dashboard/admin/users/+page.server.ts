import { validateSession } from '$lib/auth.js';
import { prisma } from '$lib/prismaConnection';
import { Role } from '@prisma/client';
import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	const session = await validateSession(cookies.get("session"));

	if (session.role != Role.HUNCH_ADMIN) {
		throw redirect(303, "/login");
	}

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
