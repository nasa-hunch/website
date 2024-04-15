import { redirect } from '@sveltejs/kit';
import { z } from 'zod';

import { Role } from '$lib/enums.js';
import { formHandler } from '$lib/server/bodyguard.js';
import { prisma } from '$lib/server/prisma/prismaConnection.js';
import { verifySession } from '$lib/server/verifySession.js';
import dayjs from 'dayjs';

export const load = async ({parent, params}) => {
	const parentData = await parent();
	const stages = await prisma.stage.findMany({
		where: {
			branchId: parentData.branch.id
		}
	});

	return {
		stages
	}
}

export const actions = {
	createBranch: formHandler(
		z.object({
			name: z.string()
		}),
		async ({ name }, { cookies }) => {
			await verifySession(cookies, Role.HUNCH_ADMIN);

			const branch = await prisma.branch.create({
				data: {
					name: name
				}
			});
			
			throw redirect(303, `/dashboard/admin/staging/${branch.id}`);
		}
	),
	createStage: async ({params, cookies}) => {
		await verifySession(cookies, Role.HUNCH_ADMIN);
		const branch = await prisma.branch.findFirst({
			where: {
				id: parseInt(params.branchId)
			}
		});

		if(!branch) {
			return {
				success: false,
				message: "No branch"
			}
		}

		await prisma.stage.create({
			data: {
				branchId: branch.id,
				name: "New Due Date",
				dueDate: dayjs(new Date()).add(1, "day").toDate()
			}
		})
	}
};
