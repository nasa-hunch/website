import { prisma } from '$lib/server/prisma/prismaConnection';

export const load = async ({ parent }) => {
	const parentData = await parent();

	const projects = await prisma.project.findMany({
		where: {
			projectTemplateId: parentData.projectTemplate.id
		},
		include: {
			projectTemplate: true,
			users: {
				include: {
					user: {
						select: {
							firstName: true,
							lastName: true,
							pfp: true
						}
					}
				}
			},
			organization: {
				select: {
					name: true
				}
			}
		}
	});

	return {
		projects
	};
};
