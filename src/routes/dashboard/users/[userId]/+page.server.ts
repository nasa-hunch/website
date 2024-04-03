import { error } from '@sveltejs/kit';

import { prisma } from '$lib/server/prisma/prismaConnection.js'

export const load = async ({ params, parent }) => {
    const data = await parent();

    if (data.user.role !== 'HUNCH_ADMIN' && data.user.role !== 'SCHOOL_ADMIN') error(404, 'User not found');

    const user = await prisma.user.findFirst({
        where: {
            AND: {
                id: parseInt(params.userId),
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
    }
}
