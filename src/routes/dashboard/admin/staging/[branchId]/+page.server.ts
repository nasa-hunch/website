import { redirect } from '@sveltejs/kit';
import dayjs from 'dayjs';
import { z } from 'zod';

import { Role } from '$lib/enums.js';
import { formHandler } from '$lib/server/bodyguard.js';
import { prisma } from '$lib/server/prisma/prismaConnection.js';
import { verifySession } from '$lib/server/verifySession.js';

export const load = async ({ parent }) => {
	const parentData = await parent();
	const stages = await prisma.stage.findMany({
		where: {
			branchId: parentData.branch.id
		},
		orderBy: {
			dueDate: 'asc'
		}
	});

	return {
		stages
	};
};

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
	createStage: async ({ params, cookies }) => {
		await verifySession(cookies, Role.HUNCH_ADMIN);
		const branch = await prisma.branch.findFirst({
			where: {
				id: parseInt(params.branchId)
			}
		});

		if (!branch) {
			return {
				success: false,
				message: 'No branch'
			};
		}

		await prisma.stage.create({
			data: {
				branchId: branch.id,
				name: 'New Due Date',
				dueDate: dayjs(new Date()).add(1, 'day').toDate()
			}
		});
	},
	editStage: formHandler(
		z.object({
			stageId: z.coerce.number(),
			name: z.string(),
			dueDate: z.coerce.date()
		}),
		async ({ stageId, name, dueDate }, { cookies }) => {
			await verifySession(cookies, Role.HUNCH_ADMIN);
			const stage = await prisma.stage.findFirst({
				where: {
					id: stageId
				}
			});

			if (!stage) {
				return {
					success: false,
					message: 'No stage'
				};
			}

			await prisma.stage.update({
				where: {
					id: stage.id
				},
				data: {
					name,
					dueDate
				}
			});

			return {
				success: true,
				message: 'Stage updated!'
			};
		}
	),
	deleteStage: formHandler(
		z.object({
			confirm: z.string().optional(),
			stageId: z.coerce.number()
		}),
		async ({ stageId }, { cookies }) => {
			await verifySession(cookies, Role.HUNCH_ADMIN);
			const stage = await prisma.stage.findFirst({
				where: {
					id: stageId
				}
			});

			if (!stage) {
				return {
					success: false,
					message: 'No stage'
				};
			}
			await prisma.stage.delete({
				where: {
					id: stage.id
				}
			});

			return {
				success: true,
				message: 'Stage Deleted.'
			};
		}
	)
};
