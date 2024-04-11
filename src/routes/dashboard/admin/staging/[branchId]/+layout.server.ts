import { redirect } from '@sveltejs/kit';

import { prisma } from '$lib/server/prisma/prismaConnection';

export const load = async ({ params }) => {
	const branches = await prisma.branch.findMany({
		orderBy: {
			createdAt: 'asc'
		}
	});

	const branch = await prisma.branch.findFirst({
		where: {
			id: parseInt(params.branchId)
		}
	});

	if (!branch) {
		throw redirect(303, '/dashboard/admin/staging');
	}

	return {
		branches,
		branch
	};
};
