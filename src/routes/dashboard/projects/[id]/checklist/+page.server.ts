import { createId } from '@paralleldrive/cuid2';
import { z } from 'zod';

import { ProjectUserPermission } from '$lib/enums.js';
import { formHandler } from '$lib/server/bodyguard.js';
import { prisma } from '$lib/server/prisma/prismaConnection';
import { verifyProjectUser } from '$lib/server/verifyProjectUser.js';

export const load = async ({ parent }) => {
	const parentData = await parent();

	const checkableItems = await prisma.toDoItem.findMany({
		where: {
			projectId: parentData.project.id
		},
		include: {
			assignees: {
				include: {
					projectUser: {
						include: {
							user: {
								select: {
									firstName: true,
									lastName: true,
									pfp: true
								}
							}
						}
					}
				}
			}
		}
	});

	const checkedItems = checkableItems.filter((item) => item.checked);
	const uncheckedItems = checkableItems.filter((item) => !item.checked);

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
				id: createId(),
				name,
				projectId: params.id,
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
			itemId: z.string()
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
			itemId: z.string()
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

			if (!toDoItem || toDoItem?.projectId != projectUser.projectId) {
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
			projectUserId: z.string(),
			itemId: z.string()
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

			if (!toDoItem || toDoItem?.projectId != projectUser.projectId) {
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

			if (!userCheck || userCheck?.projectId != projectUser.projectId) {
				return {
					success: false,
					message: 'How did we get here.'
				};
			}

			// Assignee check

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

			// Add the assignee
			await prisma.toDoAssignee.create({
				data: {
					id: createId(),
					userId: userCheck.id,
					toDoItemId: toDoItem.id
				}
			});

			return {
				success: true,
				message: 'Updated'
			};
		}
	),
	removeAssignee: formHandler(
		z.object({
			assigneeId: z.string()
		}),
		async ({ assigneeId }, { cookies, params }) => {
			const projectUser = await verifyProjectUser(cookies, params.id);

			if (projectUser.permission != ProjectUserPermission.EDITOR) {
				return {
					success: false,
					message: 'No Permissions'
				};
			}

			const assigneeCheck = await prisma.toDoAssignee.findFirst({
				where: {
					AND: {
						id: assigneeId,
						projectUser: {
							projectId: params.id
						}
					}
				}
			});

			if (!assigneeCheck) {
				return {
					success: false,
					message: 'No Assignee'
				};
			}

			// Add the assignee
			await prisma.toDoAssignee.delete({
				where: {
					id: assigneeCheck.id
				}
			});

			return {
				success: true,
				message: 'Updated'
			};
		}
	)
};
