import { prisma } from '$lib/server/prisma/prismaConnection.js'

export const load = async () => {
    return {
        posts: await prisma.blogPost.findMany({
            include: {
                author: {
                    select: {
                        firstName: true,
                        lastName: true,
                        id: true,
                        pfp: true
                    }
                }
            }
        })
    }
}
