import { error } from '@sveltejs/kit';

import { prisma } from '$lib/server/prisma/prismaConnection';

export const load = async ({ params }) => {
	const projectTemplate = await prisma.projectTemplate.findFirst({
		where: {
			id: params.projectId
		},
		include: {
			category: {
				select: {
					slug: true,
					id: true,
					name: true,
					color: true
				}
			}
		}
	});

	if (!projectTemplate) {
		throw error(400, 'Project not found');
	}

	return {
		projectTemplate
	};
};
