import { type Cookies, redirect } from '@sveltejs/kit';

import type { Role } from '../enums';
import { prisma } from './prisma/prismaConnection';

// = one week
const expirationTime = 1000 * 60 * 60 * 24 * 7;

export const verifySession = async (cookies: Cookies, ...roles: Role[]) => {
	const session = cookies.get('session');

	if (!session) {
		throw redirect(303, '/login');
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
		throw redirect(303, '/login');
	}

	if (sessionCheck.createdAt.getTime() + expirationTime < Date.now()) {
		await prisma.session.delete({
			where: {
				id: sessionCheck.id
			}
		});
		throw redirect(303, '/login');
	}

	if (
		roles.length > 0 &&
		!(sessionCheck.user.role && roles.includes(sessionCheck.user.role as Role))
	) {
		throw redirect(303, '/login');
	}

	return sessionCheck.user;
};
