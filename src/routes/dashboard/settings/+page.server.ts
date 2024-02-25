import { z } from 'zod';

import { formHandler } from '$lib/bodyguard.js';
import { prisma } from '$lib/prismaConnection.js';
import { uploadFile } from '$lib/uploadFile';
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
	),
	uploadPfp: async ({ request, cookies }) => {
		const user = await verifySession(cookies);

		const uploaded = await uploadFile(request);
		if (!uploaded.success) {
			return {
				success: false,
				message: 'File not found.'
			};
		}

		await prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				pfp: uploaded.link
			}
		});

		return {
			success: true,
			message: 'File Uploaded'
		};
	}
};
