import { z } from 'zod';

import { formHandler } from '$lib/bodyguard.js';
import { prisma } from '$lib/prismaConnection.js';
import { verifySession } from '$lib/verifySession.js';

export const actions = {
	updateAccountInfo: formHandler(
		z.object({
			firstName: z.string().min(1),
			lastName: z.string().min(1),
			email: z.string().min(1)
		}),
		async ({ firstName, lastName, email }, { cookies }) => {
			const user = await verifySession(cookies);

			await prisma.user.update({
				where: {
					id: user.id
				},
				data: {
					firstName,
					lastName,
					email
				}
			});

			return {
				success: true,
				message: 'User Updated!'
			};
		}
	)
};
