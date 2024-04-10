import { error } from '@sveltejs/kit';

import { prisma } from '$lib/server/prisma/prismaConnection.js';

export const load = async ({ params }) => {
	const category = await prisma.category.findUnique({
		where: {
			id: parseInt(params.categoryId)
		},
		include: {
			projectTemplates: true
		}
	});

	if (!category) {
		throw error(404, 'Page not found');
	}

	return {
		category
	};
};
