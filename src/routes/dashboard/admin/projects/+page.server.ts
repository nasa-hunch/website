import { formHandler } from '$lib/bodyguard.js';
import { Role } from '$lib/enums.js';
import { prisma } from '$lib/prismaConnection';
import { verifySession } from '$lib/verifySession.js';
import { z } from 'zod';

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
			icon: z.string().min(1),
			color: z.string().length(7),
			deadline: z.coerce.string()
		}),
		async ({ name, icon, color, deadline }, { cookies }) => {
			await verifySession(cookies, Role.HUNCH_ADMIN);

			const projectDeadline = new Date(deadline);

			const newColor = color.replace('#', '');

			await prisma.category.create({
				data: {
					name,
					icon,
					color: newColor,
					deadline: projectDeadline
				}
			});
		}
	)
};
