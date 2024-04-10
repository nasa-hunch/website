import { prisma } from "$lib/server/prisma/prismaConnection"

export const load = async ({parent}) => {

	const parentData = await parent()

	const submissions = await prisma.project.findMany({
		where: {
			AND: {
				submitted: true,
				projectTemplateId: parentData.projectTemplate.id
			}
		},
		orderBy: {
			submissionDate: "asc",
		}
	})

	return {
		submissions
	}
}