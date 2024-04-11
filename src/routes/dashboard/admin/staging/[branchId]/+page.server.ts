import { redirect } from '@sveltejs/kit';
import { z } from 'zod';

import { Role } from '$lib/enums.js';
import { formHandler } from '$lib/server/bodyguard.js';
import { prisma } from '$lib/server/prisma/prismaConnection.js';
import { verifySession } from '$lib/server/verifySession.js';

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
	)
};
