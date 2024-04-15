import { createId } from '@paralleldrive/cuid2';
import { redirect } from '@sveltejs/kit';
import { z } from 'zod';

import { Role } from '$lib/enums.js';
import { formHandler } from '$lib/server/bodyguard.js';
import { prisma } from '$lib/server/prisma/prismaConnection.js';
import { verifySession } from '$lib/server/verifySession.js';

export const actions = {
    new: formHandler(
        z.object({
            title: z.string().min(1),
            description: z.string().min(1),
            content: z.string().min(1),
            slug: z.string().min(2)
        }),
        async ({ title, description, content, slug }, { cookies }) => {
            const user = await verifySession(cookies, Role.HUNCH_ADMIN);

            const post = await prisma.blogPost.create({
                data: {
                    id: createId(),
                    title,
                    summary: description,
                    content,
                    slug,
                    authorId: user.id
                }
            });

            redirect(302, `/blog/${post.id}`)
        }
    )
}
