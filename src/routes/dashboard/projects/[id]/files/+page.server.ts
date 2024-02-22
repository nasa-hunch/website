import { prisma } from "$lib/prismaConnection";

export const load = async ({parent}) => {

    const parentData = await parent();

    const files = await prisma.file.findMany({
        where: {
            projectId: parentData.project.id
        }
    })

    return {
        files
    }

}