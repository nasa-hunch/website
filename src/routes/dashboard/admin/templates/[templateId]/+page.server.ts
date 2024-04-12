import { z } from 'zod';

import { Role } from '$lib/enums.js';
import { formHandler } from '$lib/server/bodyguard.js';
import { prisma } from '$lib/server/prisma/prismaConnection.js';
import { verifySession } from '$lib/server/verifySession.js';

export const actions = {
	updateDesc: formHandler(
		z.object({
			description: z.string().min(1),
			shortDescription: z.string().min(1)
		}),
		async ({ description, shortDescription }, { cookies, params }) => {
			await verifySession(cookies, Role.HUNCH_ADMIN);

			await prisma.projectTemplate.update({
				where: {
					id: params.templateId
				},
				data: {
					description,
					shortDescription
				}
			});

			return {
				success: true,
				message: 'project updated!'
			};
		}
	)
};
