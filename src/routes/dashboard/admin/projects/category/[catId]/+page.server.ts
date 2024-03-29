import { z } from 'zod';

import { formHandler } from '$lib/bodyguard';
import { Role } from '$lib/enums';
import { prisma } from '$lib/prismaConnection';
import { verifySession } from '$lib/verifySession';

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
					deadline,
					categoryId: category.id
				}
			});

			return {
				success: true,
				message: 'Created!'
			};
		}
	)
};
