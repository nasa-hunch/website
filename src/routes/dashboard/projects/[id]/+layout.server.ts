import { error, redirect } from '@sveltejs/kit';

import { Role } from '$lib/enums';
import { prisma } from '$lib/server/prisma/prismaConnection';

export const load = async ({ params, parent }) => {
	const parentData = await parent();

	const project = await prisma.project.findFirst({
		where: {
			AND: {
				id: params.id,
				OR:
					parentData.user.role == Role.HUNCH_ADMIN
						? []
						: [
								{
									users: {
										some: {
											userId: parentData.user.id
										}
									}
								},
								{
									organization: {
										users: {
											some: {
												AND: {
													id: parentData.user.id,
													role: Role.ORG_ADMIN
												}
											}
										}
									}
								}
						  ]
			}
		},
		include: {
			users: {
				include: {
					user: {
						select: {
							firstName: true,
							lastName: true,
							pfp: true,
							role: true,
							id: true
						}
					}
				}
			},
			projectTemplate: {
				select: {
					name: true,
					description: true,
					id: true
				}
			},
			organization: {
				select: {
					name: true
				}
			}
		}
	});

	if (!project) {
		error(404, 'Project not found');
	}

	if (project.submitted) {
		if (parentData.user.role == Role.HUNCH_ADMIN) {
			redirect(303, `/dashboard/admin/templates/${project.projectTemplate.id}/submissions/${project.id}`);
		}

		redirect(303, '/dashboard/congrats');
	}

	return {
		project
	};
};
