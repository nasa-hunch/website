import { createId } from '@paralleldrive/cuid2';
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

			await prisma.projectTemplate.create({
				data: {
					id: createId(),
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
	)
};
