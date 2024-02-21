import { error } from '@sveltejs/kit';

import { prisma } from '$lib/prismaConnection';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent }) => {

	const parentData = await parent()
	const id = parseInt(params.id);

	const projectUser = await prisma.projectUser.findFirst({
		where: {
			AND: {
				userId: parentData.user.id,
				projectId: id
			}
		}
	})

	if (!projectUser || projectUser == null) {
		error(404, 'Project not found');
	}

	const project = await prisma.project.findFirst({
		where: {
			id: id
		}
	})

	return {
		project
	};
};
