import { prisma } from '$lib/server/prisma/prismaConnection.js';

export const load = async ({ parent }) => {
    const data = await parent();
    return {
        notifications: await prisma.notification.findMany({
            where: {
                OR: [
                    { receiverId: data.user.id },
                    { senderId: data.user.id }
                ]
            }
        })
    }
}
