import { z } from 'zod';

import { formHandler } from '$lib/server/bodyguard.js';
import { checkPassword, makePassword, verifyToken } from '$lib/server/password.js';
import { prisma } from '$lib/server/prisma/prismaConnection.js';
import { uploadFile } from '$lib/server/storage/uploadFile';
import { verifySession } from '$lib/server/verifySession.js';

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
	changePassword: formHandler(
		z.object({
			password: z.string().min(1),
			confirmPassword: z.string().min(1),
			oldPassword: z.string().min(1)
		}),
		async ({ password, confirmPassword }, { cookies }) => {
			const user = await verifySession(cookies);

			if (password !== confirmPassword) {
				return {
					success: false,
					message: 'Passwords do not match!'
				};
			}

			if (!checkPassword(user.hash, user.salt, password)) {
				return {
					success: false,
					message: 'Old Password is incorrect!'
				};
			}

			await prisma.user.update({
				where: {
					id: user.id
				},
				data: {
					...(await makePassword(password))
				}
			});

			return {
				success: true,
				message: 'Password Updated!'
			};
		}
	),
	disableMFA: formHandler(
		z.object({
			password: z.string()
		}),
		async ({ password }, { cookies }) => {
			const user = await verifySession(cookies);
			const validPass = await checkPassword(user.hash, user.salt, password);
			if (!validPass) {
				return {
					success: false,
					message: 'Password is incorrect.'
				};
			}

			await prisma.user.update({
				where: {
					id: user.id
				},
				data: {
					mfa: false
				}
			});
			return {
				success: true,
				message: 'Successfully disabled MFA.'
			};
		}
	),
	confirmMFA: formHandler(
		z.object({
			token: z.string().length(6)
		}),
		async ({ token }, { cookies }) => {
			const user = await verifySession(cookies);
			const verified = verifyToken(token, user.secret);
			if (!verified) {
				return {
					success: false,
					message: 'Token is incorrect.'
				};
			}

			await prisma.user.update({
				where: {
					id: user.id
				},
				data: {
					mfa: true
				}
			});

			return {
				success: true,
				message: 'MFA Confirmed.'
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
