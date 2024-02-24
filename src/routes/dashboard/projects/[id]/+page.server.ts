import { prisma } from "$lib/prismaConnection"


export const load = async ({parent}) => {

	const parentData = await parent()

	const checkListItems = await prisma.toDoItem.findMany({
		where: {
			projectId: parentData.project.id
		}
	})


	return {
		checkListItems
	}
}