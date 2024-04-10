import { redirect } from '@sveltejs/kit';
import { z } from 'zod';

import { Role } from '$lib/enums';
import { formHandler } from '$lib/server/bodyguard';
import { prisma } from '$lib/server/prisma/prismaConnection';
import { verifySession } from '$lib/server/verifySession';

export const load = async () => {
	return {
		organizations: await prisma.organization.findMany()
	};
};

export const actions = {
	addNewOrg: formHandler(
		z.object({
			name: z.string()
		}),
		async ({ name }, { cookies }) => {
			await verifySession(cookies, Role.HUNCH_ADMIN);

			const organization = await prisma.organization.create({
				data: {
					name
				}
			});

			redirect(303, `/dashboard/orgs/${organization.id}`);
		}
	)
};
