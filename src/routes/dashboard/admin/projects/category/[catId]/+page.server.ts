import { z } from 'zod';

import { Role } from '$lib/enums';
import { formHandler } from '$lib/server/bodyguard';
import { prisma } from '$lib/server/prisma/prismaConnection';
import { verifySession } from '$lib/server/verifySession';

export const actions = {
	createProject: formHandler(
		z.object({
			name: z.string(),
			desc: z.string(),
			deadline: z.coerce.date()
		}),
		async ({ name, desc, deadline }, { params, cookies }) => {
			await verifySession(cookies, Role.HUNCH_ADMIN);

			if (!params.catId) {
				return {
					success: false,
					message: 'No Category'
				};
			}

			const category = await prisma.category.findFirst({
				where: {
					id: parseInt(params.catId)
				}
			});

			if (!category) {
				return {
					success: false,
					message: 'No Category'
				};
			}

			await prisma.projectTemplate.create({
				data: {
					name,
					description: desc,
					shortDescription: '',
					deadline,
					category: {
						connect: {
							id: category.id
						}
					}
				}
			});

			return {
				success: true,
				message: 'Created!'
			};
		}
	),
	updateCategory: formHandler(
		z.object({
			name: z.string().optional(),
			color: z.string().optional(),
			deadline: z.string().optional()
		}),
		async ({ name, color, deadline }, { cookies, params }) => {
			await verifySession(cookies, Role.HUNCH_ADMIN);

			if (!params.catId) {
				return {
					success: false,
					message: 'No Category'
				};
			}

			const category = await prisma.category.findFirst({
				where: {
					id: parseInt(params.catId)
				}
			});

			if (!category) {
				return {
					success: false,
					message: 'No Category'
				};
			}

			let deadLineDate: Date | undefined = undefined;
			if (deadline) {
				deadLineDate = new Date(Date.parse(deadline));
			}

			await prisma.category.update({
				where: {
					id: category.id
				},
				data: {
					name: name || category.name,
					color: color?.substring(1, 6) || category.color,
					deadline: deadLineDate || category.deadline
				}
			});

			return {
				success: true,
				message: 'Updated'
			};
		}
	)
};
