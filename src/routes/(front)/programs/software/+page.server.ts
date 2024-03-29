import { prisma } from "$lib/prismaConnection"

export const load = async () => {
	const projects = await prisma.projectTemplate.findMany({
		where: {
			categoryId: 1
		}
	})

	return {
		projects
	}
}