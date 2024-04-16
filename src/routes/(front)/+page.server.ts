import { prisma } from "$lib/server/prisma/prismaConnection"

export const load = async () => {
    return {
        locations: await prisma.location.findMany()
    }
}
