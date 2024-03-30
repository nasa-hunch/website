import { redirect } from '@sveltejs/kit';

import { prisma } from '$lib/server/prisma/prismaConnection.js';

export const load = async ({ parent }) => {
	const parentData = await parent();

	if (parentData.user.role === 'HUNCH_ADMIN') {
		redirect(302, '/dashboard/admin');
	}

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
