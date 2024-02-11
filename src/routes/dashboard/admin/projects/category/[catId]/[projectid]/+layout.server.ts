import { error } from '@sveltejs/kit';

import { prisma } from '$lib/prismaConnection';

export const load = async ({ params }) => {
	const projectTemplate = await prisma.projectTemplate.findUnique({
		where: {
			id: parseInt(params.projectid)
		}
	});

	if (!projectTemplate) {
		throw error(404, 'Project not found.');
	}

	return {
		projectTemplate
	};
};
