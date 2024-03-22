import { error } from '@sveltejs/kit';

import { prisma } from '$lib/prismaConnection';

export const load = async ({ params }) => {
	const projectTemplate = await prisma.projectTemplate.findUnique({
		where: {
			id: parseInt(params.projectid)
		},
		include: {
			projects: {
				include: {
					users: true
				}
			},
			
		}
	});

	let submittedProjectCount = 0;
	

	if (!projectTemplate) {
		throw error(404, 'Project not found.');
	}

	let projectUserCount = 0;
	projectTemplate.projects.forEach((item) => {
		if(item.submitted) {
			submittedProjectCount++;
		}
		projectUserCount += item.users.length
	})

	return {
		projectTemplate,
		projectCount: submittedProjectCount,
		projectUserCount
	};
};
