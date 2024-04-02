import { prisma } from "$lib/server/prisma/prismaConnection";

export const load = async ({parent}) => {
	const parentData = await parent();

	const templateFiles = await prisma.file.findMany({
		where: {
			
		}
	})
}
