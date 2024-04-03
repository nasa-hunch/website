import { error } from '@sveltejs/kit'

import { prisma } from '$lib/server/prisma/prismaConnection.js'

export const load = async ({ params }) => {
    const org = await prisma.organization.findUnique({
        where: {
            id: parseInt(params.orgId)
        },
        include: {
            users: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                    role: true,
                    pfp: true
                }
            }
        }
    })

    if (!org) error(404, 'Organization not found')

    return {
        org
    }
}
    