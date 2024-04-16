import { prisma } from '$lib/server/prisma/prismaConnection.js';
import { z } from 'zod';
import { verifySession } from '$lib/server/verifySession.js';
import { formHandler } from '$lib/server/bodyguard.js';
export const load = async ({ parent }) => {
	const data = await parent();
	return {
		notifications: await prisma.notification.findMany({
			where: {
				OR: [{ receiverId: data.user.id }, { senderId: data.user.id }]
			},
			include: {
				sender: {
					select: {
						firstName: true,
						lastName: true,
						pfp: true
					}
				},
				receiver: {
					select: {
						firstName: true,
						lastName: true,
						pfp: true
					}
				}
			}
		})
	};
};

export const actions = {
	readNotification: formHandler(
		z.object({
			notification: z.string()
		}),
		async (
			{ notification },
			{ cookies }
		) => {
			const user = await verifySession(cookies);
			const n = JSON.parse(notification);
			if (n.receiverId === user.id) {
				await prisma.notification.update({
					where: {
						id: notification.id
					},
					data: {
						read: true
					}
				});
				return {
					success: true,
					message: "Marked as read."
				}
			} else {
				return {
					success: false,
					message: "Not your notification."
				}
			}
			
		}
	)
};
