import { prisma } from '$lib/prismaConnection';
import type { Prisma } from '@prisma/client';
import { redirect } from '@sveltejs/kit';

/**
 * Validates a session and returns the user if it is valid.
 *
 * Throws a redirect if the session is invalid.
 */
export async function validateSession(
	session: string | undefined,
	include: Prisma.UserInclude = {}
) {
	if (!session) {
		redirect(303, '/login');
	}

	const sessionInstance = await prisma.session.findFirst({
		where: {
			sessionText: session
		},
		include: {
			user: {
				include: {
					...include
				}
			}
		}
	});

	const user = sessionInstance?.user;

	// We have a valid session!
	if (!user) {
		redirect(303, '/login');
	}

	return user;
}
