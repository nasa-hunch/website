import { prisma } from '$lib/prismaConnection.js'


export const load = async ({params}) => {

	const category = await prisma.category.findUnique({
		where: {
			id: parseInt(params.catId)
		}
	})

	return {
		category
	}

}