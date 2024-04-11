import { redirect } from '@sveltejs/kit';

import { prisma } from '$lib/server/prisma/prismaConnection';

export const load = async () => {
	let branch = await prisma.branch.findFirst({
		orderBy: {
			createdAt: 'asc'
		}
	});

	if (!branch) {
		branch = await prisma.branch.create({
			data: {
				name: 'Main'
			}
		});
	}

	throw redirect(303, `/dashboard/admin/staging/${branch.id}`);
};
