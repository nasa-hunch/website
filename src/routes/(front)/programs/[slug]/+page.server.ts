import { prisma } from '$lib/server/prisma/prismaConnection';
import { error } from "@sveltejs/kit";
export async function load({ params }) {
    const slug = params.slug;
    const item = await prisma.category.findFirst({
        where: {
            slug
        },
        include: {
            projectTemplates: true
        }
    });

    if (!item) error(404);

    return item;
}