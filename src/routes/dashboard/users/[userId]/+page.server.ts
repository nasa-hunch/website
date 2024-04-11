import { error } from '@sveltejs/kit';
import { z } from 'zod';

import { Role } from '$lib/enums.js';
import { formHandler } from '$lib/server/bodyguard.js';
import { makePassword } from '$lib/server/password.js';
import { prisma } from '$lib/server/prisma/prismaConnection.js';
import { verifySession } from '$lib/server/verifySession.js';

export const load = async ({ params, parent }) => {
	const data = await parent();

	if (data.user.role !== 'HUNCH_ADMIN' && data.user.role !== 'ORG_ADMIN')
		error(404, 'User not found');

	const user = await prisma.user.findFirst({
		where: {
			AND: {
				id: params.userId,
				...(data.user.role === 'HUNCH_ADMIN' ? {} : { orgId: data.user.orgId })
			}
		},
		select: {
			sessions: {
				select: {
					createdAt: true,
					lastUsed: true,
					ip: true,
					userAgent: true,
					sessionText: true
				}
			},
			id: true,
			createdAt: true,
			updatedAt: true,
			firstName: true,
			lastName: true,
			pfp: true,
			email: true
		}
	});

	if (!user) error(404, 'User not found');

	return {
		selectedUser: user
	};
};

export const actions = {
	updateUser: formHandler(
		z.object({
			firstName: z.string().min(1),
			lastName: z.string().min(1),
			email: z.string().email()
		}),
		async ({ firstName, lastName, email }, { params, cookies }) => {
			await verifySession(cookies, Role.HUNCH_ADMIN, Role.ORG_ADMIN);

			await prisma.user.update({
				where: {
					id: parseInt(params.userId)
				},
				data: {
					firstName,
					lastName,
					email
				}
			});

			return {
				success: true
			};
		}
	),
	changePassword: formHandler(
		z.object({
			password: z.string().min(1),
			confirmPassword: z.string().min(1)
		}),
		async ({ password, confirmPassword }, { params, cookies }) => {
			await verifySession(cookies, Role.HUNCH_ADMIN);

			const user = await prisma.user.findFirst({
				where: {
					id: params.userId
				}
			});

			if (!user) error(404, 'User not found');

			if (password !== confirmPassword) {
				return {
					success: false,
					message: 'Passwords do not match!'
				};
			}

			await prisma.user.update({
				where: {
					id: params.userId
				},
				data: {
					...(await makePassword(password))
				}
			});

			return {
				success: true
			};
		}
	),
	sendNotification: formHandler(
		z.object({
			message: z.string().min(1),
			title: z.string().min(1)
		}),
		async ({ message, title }, { params, cookies }) => {
			const sender = await verifySession(cookies, Role.HUNCH_ADMIN, Role.ORG_ADMIN, Role.TEACHER);

			const user = await prisma.user.findFirst({
				where: {
					id: params.userId
				}
			});

			if (!user) error(404, 'User not found');

			await prisma.notification.create({
				data: {
					receiverId: user.id,
					senderId: sender.id,
					message,
					title
				}
			});

			return {
				success: true
			};
		}
	)
};
