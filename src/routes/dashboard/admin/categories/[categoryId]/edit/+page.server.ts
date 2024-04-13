import { z } from "zod";

import { Role } from "$lib/enums";
import { formHandler } from "$lib/server/bodyguard";
import { prisma } from "$lib/server/prisma/prismaConnection";
import { verifySession } from "$lib/server/verifySession";

export const actions = {
	updateCategory: formHandler(
		z.object({
			name: z.string().optional(),
			color: z.string().optional(),
			deadline: z.string().optional(),
			description: z.string().optional()
		}),
		async ({ name, color, deadline, description }, { cookies, params }) => {
			await verifySession(cookies, Role.HUNCH_ADMIN);

			if (!params.categoryId) {
				return {
					success: false,
					message: 'No Category'
				};
			}

			const category = await prisma.category.findFirst({
				where: {
					id: parseInt(params.categoryId)
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
					color: color?.substring(1, 7) || category.color,
					deadline: deadLineDate || category.deadline,
					description: description || category.description
				}
			});

			return {
				success: true,
				message: 'Updated'
			};
		}
	)
}
