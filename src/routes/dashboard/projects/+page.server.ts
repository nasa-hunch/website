import { z } from 'zod';

import { formHandler } from '$lib/bodyguard.js';
import { ProjectUserPermission, Role } from '$lib/enums.js';
import { prisma } from '$lib/prismaConnection';
import { verifySession } from '$lib/verifySession.js';

export const load = async () => {
	const possibleProjects = await prisma.projectTemplate.findMany({});

	console.log(possibleProjects);

	return {
		possibleProjects
	};
};

export const actions = {
	createProject: formHandler(
		z.object({
			projectId: z.coerce.number()
		}),
		async ({ projectId }, { cookies }) => {
			const user = await verifySession(cookies);
			if (
				user.role != Role.HUNCH_ADMIN &&
				user.role != Role.SCHOOL_ADMIN &&
				user.role != Role.TEACHER
			) {
				return {
					success: false,
					message: 'No Permissions'
				};
			}

			if (!user.orgId) {
				return {
					success: false,
					message: 'No Organization.'
				};
			}

			const projectTemplate = await prisma.projectTemplate.findUnique({
				where: {
					id: projectId
				}
			});

			if (!projectTemplate) {
				return {
					success: false,
					message: 'No Project Template'
				};
			}

			const joinCode = 1e6 + Math.floor(Math.random() * 9e6);

			await prisma.project.create({
				data: {
					name: projectTemplate.name,
					description: projectTemplate.description,
					orgId: user.orgId,
					projectTemplateId: projectTemplate.id,
					joinCode: joinCode,
					users: {
						create: {
							userId: user.id,
							owner: true,
							permission: ProjectUserPermission.EDITOR
						}
					}
				}
			});

			return {
				success: true,
				message: 'Project Created'
			};
		}
	)
};
