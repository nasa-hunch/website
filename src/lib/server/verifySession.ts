import { type Cookies, redirect } from '@sveltejs/kit';

import type { Role } from '../enums';
import { prisma } from './prisma/prismaConnection';

// = one week
const expirationTime = 1000 * 60 * 60 * 24 * 7;

export const verifySessionOptional = async (cookies: Cookies, ...roles: Role[]) => {
	const session = cookies.get('session');

	if (!session) {
		return undefined;
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
		return undefined;
	}

	if (sessionCheck.createdAt.getTime() + expirationTime < Date.now()) {
		await prisma.session.delete({
			where: {
				id: sessionCheck.id
			}
		});
		return undefined;
	}

	if (
		roles.length > 0 &&
		!(sessionCheck.user.role && roles.includes(sessionCheck.user.role as Role))
	) {
		return undefined;
	}

	return sessionCheck.user;
}

export const verifySession = async (cookies: Cookies, ...roles: Role[]) => {
	const check = await verifySessionOptional(cookies, ...roles);
	
	if (check) {
		return check;
	}
	
	throw redirect(303, '/login');
};
