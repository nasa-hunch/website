import { type Cookies, redirect } from '@sveltejs/kit';

import type { Role } from '../enums';
import { prisma } from './prisma/prismaConnection';

export const verifySession = async (cookies: Cookies, role?: Role) => {
	const session = cookies.get('session');

	if (!session) {
		redirect(303, '/login');
	}

	const sessionCheck = await prisma.session.findFirst({
		where: {
			sessionText: session
		},
		include: {
			user: true
		}
	});

	if (!sessionCheck?.user) {
		redirect(303, '/login');
	}

	if (role && sessionCheck.user.role != role) {
		redirect(303, '/login');
	}

	return sessionCheck.user;
};
