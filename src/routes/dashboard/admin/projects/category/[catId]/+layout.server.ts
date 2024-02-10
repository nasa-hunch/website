import { prisma } from '$lib/prismaConnection.js'
import { error } from '@sveltejs/kit'


export const load = async ({params}) => {

	const category = await prisma.category.findUnique({
		where: {
			id: parseInt(params.catId)
		},
		include: {
			projectTemplates: true
		}
	})

	if(!category) {
		throw error(404, "Page not found")
	}

	return {
		category
	}

}