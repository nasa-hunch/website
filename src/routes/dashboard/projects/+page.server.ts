import { createId } from '@paralleldrive/cuid2';
import { z } from 'zod';

import { ProjectUserPermission, Role } from '$lib/enums.js';
import { formHandler } from '$lib/server/bodyguard.js';
import { prisma } from '$lib/server/prisma/prismaConnection';
import { verifySession } from '$lib/server/verifySession.js';

export const load = async () => {
	const possibleProjects = await prisma.projectTemplate.findMany({});

	return {
		possibleProjects
	};
};

export const actions = {
	createProject: formHandler(
		z.object({
			projectId: z.string()
		}),
		async ({ projectId }, { cookies }) => {
			const user = await verifySession(cookies);
			if (
				user.role != Role.HUNCH_ADMIN &&
				user.role != Role.ORG_ADMIN &&
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

			await prisma.project.create({
				data: {
					id: createId(),
					orgId: user.orgId,
					projectTemplateId: projectTemplate.id,
					users: {
						create: {
							id: createId(),
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
