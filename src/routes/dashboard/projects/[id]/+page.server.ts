import { z } from 'zod';

import { formHandler } from '$lib/bodyguard.js';
import { ProjectUserPermission } from '$lib/enums.js';
import { prisma } from '$lib/prismaConnection';
import { verifyProjectUser } from '$lib/verifyProjectUser.js';

export const load = async ({ parent }) => {
	const parentData = await parent();

	const checkableItems = await prisma.toDoItem.findMany({
		where: {
			projectId: parentData.project.id
		}
	});

	const uncheckedItems: typeof checkableItems = [];
	const checkedItems: typeof checkableItems = [];

	checkableItems.map((item) => {
		if (item.checked) {
			checkedItems.push(item);
		} else {
			uncheckedItems.push(item);
		}
	});

	return {
		numberOfItems: checkableItems.length,
		checkedItems,
		uncheckedItems
	};
};

export const actions = {
	createItem: formHandler(z.object({ name: z.string() }), async ({ name }, { cookies, params }) => {
		const projectUser = await verifyProjectUser(cookies, params.id);

		if (projectUser.permission != ProjectUserPermission.EDITOR) {
			return {
				success: false,
				message: 'No Permissions'
			};
		}

		await prisma.toDoItem.create({
			data: {
				name,
				projectId: parseInt(params.id),
				checked: false
			}
		});

		return {
			success: true,
			message: 'Item Created!'
		};
	}),
	deleteToDoItem: formHandler(
		z.object({
			itemId: z.coerce.number()
		}),
		async ({ itemId }, { cookies, params }) => {
			const projectUser = await verifyProjectUser(cookies, params.id);

			if (projectUser.permission != ProjectUserPermission.EDITOR) {
				return {
					success: false,
					message: 'No Permissions'
				};
			}

			const toDoItem = await prisma.toDoItem.findFirst({
				where: {
					id: itemId
				}
			});

			if (toDoItem?.projectId != projectUser.projectId) {
				return {
					success: false,
					message: 'No Item'
				};
			}

			await prisma.toDoItem.delete({
				where: {
					id: itemId
				}
			});

			return {
				success: true,
				message: 'Deleted!'
			};
		}
	),
	completeToDoItem: formHandler(
		z.object({
			itemId: z.coerce.number()
		}),
		async ({ itemId }, { cookies, params }) => {
			const projectUser = await verifyProjectUser(cookies, params.id);

			if (projectUser.permission != ProjectUserPermission.EDITOR) {
				return {
					success: false,
					message: 'No Permissions'
				};
			}

			const toDoItem = await prisma.toDoItem.findFirst({
				where: {
					id: itemId
				}
			});

			if (toDoItem?.projectId != projectUser.projectId) {
				return {
					success: false,
					message: 'No Item'
				};
			}

			await prisma.toDoItem.update({
				where: {
					id: itemId
				},
				data: {
					checked: !toDoItem.checked
				}
			});

			return {
				success: true,
				message: 'Deleted!'
			};
		}
	),
	addAssignee: formHandler(
		z.object({
			projectUserId: z.coerce.number(),
			itemId: z.coerce.number()
		}),
		async ({ projectUserId, itemId }, { cookies, params }) => {
			const projectUser = await verifyProjectUser(cookies, params.id);

			if (projectUser.permission != ProjectUserPermission.EDITOR) {
				return {
					success: false,
					message: 'No Permissions'
				};
			}

			const toDoItem = await prisma.toDoItem.findFirst({
				where: {
					id: itemId
				}
			});

			if (toDoItem?.projectId != projectUser.projectId) {
				return {
					success: false,
					message: 'No Item'
				};
			}

			const userCheck = await prisma.projectUser.findFirst({
				where: {
					id: projectUserId
				}
			});

			if (userCheck?.projectId != projectUser.projectId) {
				return {
					success: false,
					message: 'How did we get here.'
				};
			}

			//Assignee check

			const assigneeCheck = await prisma.toDoAssignee.findFirst({
				where: {
					AND: {
						userId: userCheck.id,
						toDoItemId: toDoItem.id
					}
				}
			});

			if (assigneeCheck) {
				return {
					success: true,
					message: 'User already existed'
				};
			}

			//Add the assignee
			await prisma.toDoAssignee.create({
				data: {
					userId: userCheck.id,
					toDoItemId: toDoItem.id
				}
			});

			return {
				success: true,
				message: 'Updated'
			};
		}
	)
};
