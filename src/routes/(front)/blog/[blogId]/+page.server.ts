import { error } from "@sveltejs/kit";

import { prisma } from "$lib/server/prisma/prismaConnection"

export const load = async ({ params }) => {
    const post = await prisma.blogPost.findFirst({
        where: {
            id: params.blogId
        },
        include: {
            author: {
                select: {
                    firstName: true,
                    lastName: true,
                    pfp: true,
                    id: true
                }
            }
        }
    });

    if (!post) error(404, 'Blog post not found.');

    return {
        post
    }
}
