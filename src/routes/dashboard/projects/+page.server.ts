import { prisma } from "$lib/prismaConnection"

export const load = async () => {
	const categories = await prisma.category.findMany({})

	const possibleProjects = await prisma.projectTemplate.findMany({})

	console.log(possibleProjects)

	return {
		categories,
		possibleProjects
	}
}