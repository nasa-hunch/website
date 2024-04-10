import { z } from 'zod';

import { Role } from '$lib/enums.js';
import { formHandler } from '$lib/server/bodyguard.js';
import { prisma } from '$lib/server/prisma/prismaConnection';
import { verifySession } from '$lib/server/verifySession.js';

export const load = async () => {
	const categories = await prisma.category.findMany({});

	return {
		categories
	};
};

export const actions = {
	createCategory: formHandler(
		z.object({
			name: z.string().min(1),
			color: z.string().length(7),
			deadline: z.coerce.string()
		}),
		async ({ name, color, deadline }, { cookies }) => {
			await verifySession(cookies, Role.HUNCH_ADMIN);

			const projectDeadline = new Date(deadline);

			const newColor = color.replace('#', '');

			await prisma.category.create({
				data: {
					name,
					icon: '',
					color: newColor,
					deadline: projectDeadline
				}
			});
		}
	)
};
