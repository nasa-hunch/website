import { error } from '@sveltejs/kit';

import { prisma } from '$lib/server/prisma/prismaConnection';

export const load = async ({ params }) => {
	const projectTemplate = await prisma.projectTemplate.findUnique({
		where: {
			id: parseInt(params.templateId)
		},
		include: {
			projects: {
				include: {
					users: true
				}
			}
		}
	});

	if (!projectTemplate) {
		throw error(404, 'Project not found.');
	}

	const submittedProjectCount = projectTemplate.projects.filter((item) => item.submitted).length;
	const projectUserCount = projectTemplate.projects.reduce(
		(acc, item) => acc + item.users.length,
		0
	);

	return {
		projectTemplate,
		projectCount: submittedProjectCount,
		projectUserCount
	};
};
