import { error } from '@sveltejs/kit';

import { prisma } from '$lib/server/prisma/prismaConnection.js'

export const load = async ({ params }) => {
    const user = await prisma.user.findFirst({
        where: {
            id: parseInt(params.userId)
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
        }
    });

    if (!user) error(404, 'User not found');

    return {
        selectedUser: user
    }
}
