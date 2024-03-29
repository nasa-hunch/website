import { prisma } from '$lib/server/prisma/prismaConnection.js';

export const load = async ({ parent }) => {
	const parentData = await parent();

	const assignees = await prisma.toDoAssignee.findMany({
		where: {
			AND: {
				projectUser: {
					userId: parentData.user.id
				},
				toDoItem: {
					checked: false
				}
			}
		},
		include: {
			toDoItem: true
		}
	});

	return {
		assignees
	};
};
