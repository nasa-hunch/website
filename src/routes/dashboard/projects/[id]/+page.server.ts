import { prisma } from "$lib/prismaConnection"
import { verifySession } from "$lib/verifySession.js";


export const load = async ({parent}) => {

	const parentData = await parent()

	const checkableItems = await prisma.toDoItem.findMany({
		where: {
			projectId: parentData.project.id,
		}
	})

	const uncheckedItems: typeof checkableItems = [];
	const checkedItems: typeof checkableItems = [];


	checkableItems.map((item) => {
		if(item.checked) {
			checkedItems.push(item)
		} else {
			uncheckedItems.push(item)
		}
	})


	return {
		checkedItems,
		uncheckedItems
	}
}

export const actions = {
	createItem: async ({cookies, params}) => {
		verifySession(cookies)
	}
}