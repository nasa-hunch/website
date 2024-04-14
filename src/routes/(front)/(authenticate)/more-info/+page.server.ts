import { redirect } from '@sveltejs/kit';
import { z } from 'zod';

import { Role } from '$lib/enums';
import { validateSession } from '$lib/server/auth.js';
import { formHandler } from '$lib/server/bodyguard.js';
import { prisma } from '$lib/server/prisma/prismaConnection';
import { verifySession } from '$lib/server/verifySession.js';

export const load = async ({ cookies }) => {
	const user = await validateSession(cookies.get('session'), {
		projectUser: true
	});

	if (
		(user.role == Role.STUDENT && user.projectUser.length != 0) ||
		(user.role == Role.TEACHER && user.organization != null) ||
		user.role == Role.HUNCH_ADMIN
	) {
		redirect(303, '/dashboard');
	}

	return {
		user
	};
};

export const actions = {
	joinInviteCode: formHandler(
		z.object({
			code: z.string()
		}),
		async ({ code }, { cookies }) => {
			const user = await verifySession(cookies);

			const invite = await prisma.invite.findFirst({
				where: {
					joinCode: code,
					OR: [
						{
							toId: null
						},
						{
							toId: user.id
						}
					]
				}
			});

			if (!invite) {
				return {
					success: false,
					message: 'Invite not found'
				};
			}

			redirect(302, `/invite/${code}`);
		}
	)
};
