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
				message: 'No Perms'
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
	})
};
