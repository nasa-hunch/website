import { error } from "@sveltejs/kit";

import { prisma } from "$lib/server/prisma/prismaConnection";

export const load = async({params}) => {
	const projectTemplate = await prisma.projectTemplate.findFirst({
		where: {
			id: parseInt(params.projectId)
		}
	})

	if(!projectTemplate) {
		throw error(400, "Project not found")
	}

	return {
		projectTemplate
	}
}
