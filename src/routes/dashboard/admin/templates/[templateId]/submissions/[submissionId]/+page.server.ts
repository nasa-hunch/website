import { error } from '@sveltejs/kit';

import { prisma } from '$lib/server/prisma/prismaConnection';

export const load = async ({ parent, params }) => {
	const parentData = await parent();

	const submission = await prisma.project.findFirst({
		where: {
			AND: {
				submitted: true,
				projectTemplateId: parentData.projectTemplate.id,
				id: params.submissionId
			}
		},
		include: {
			organization: true,
			users: {
				include: {
					user: {
						select: {
							id: true,
							firstName: true,
							lastName: true,
							role: true,
							pfp: true
						}
					}
				}
			},
			files: {
				include: {
					file: true
				}
			}
		}
	});

	if (!submission) error(404, 'Submission not found');

	return {
		submission
	};
};
