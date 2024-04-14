import { createId } from '@paralleldrive/cuid2';
import { error } from '@sveltejs/kit';
import { z } from 'zod';

import { ProjectUserPermission, Role } from '$lib/enums';
import { formHandler } from '$lib/server/bodyguard.js';
import { prisma } from '$lib/server/prisma/prismaConnection.js';
import { verifyProjectUser } from '$lib/server/verifyProjectUser.js';
import { verifySession } from '$lib/server/verifySession.js';

import { updateMemberRole } from './changeRoleHelper.js';

export const actions = {
	makeViewer: formHandler(
		z.object({
			memberId: z.string()
		}),
		async ({ memberId }, { cookies, params }) => {
			return await updateMemberRole(memberId, ProjectUserPermission.VIEWER, cookies, params);
		}
	),
	makeEditor: formHandler(
		z.object({
			memberId: z.string()
		}),
		async ({ memberId }, { cookies, params }) => {
			return await updateMemberRole(memberId, ProjectUserPermission.EDITOR, cookies, params);
		}
	),
	makeNone: formHandler(
		z.object({
			memberId: z.string()
		}),
		async ({ memberId }, { cookies, params }) => {
			return await updateMemberRole(
				memberId,
				ProjectUserPermission.NEEDS_APPROVAL,
				cookies,
				params
			);
		}
	),
	kickMember: formHandler(
		z.object({
			memberId: z.string()
		}),
		async ({ memberId }, { cookies, params }) => {
			const projectUser = await verifyProjectUser(cookies, params.id);

			if (!projectUser.owner) {
				return {
					success: false,
					message: 'No Permissions'
				};
			}

			const projectUserToDelete = await prisma.projectUser.findFirst({
				where: {
					AND: {
						projectId: params.id,
						id: memberId
					}
				}
			});

			if (!projectUserToDelete) {
				return {
					success: false,
					message: 'How did we get here?'
				};
			}

			if (projectUser.id == projectUserToDelete.id) {
				return {
					success: false,
					message: "Can't remove yourself."
				};
			}

			await prisma.projectUser.delete({
				where: {
					id: projectUserToDelete.id
				}
			});

			return {
				success: true,
				message: 'User Removed'
			};
		}
	),
	invite: async ({ params, cookies }) => {
		const user = await verifySession(cookies);

		const project = await prisma.project.findFirst({
			where: {
				id: params.id
			},
			select: {
				orgId: true
			}
		});

		if (!project) error(404, 'Project not found');

		const invite = await prisma.invite.create({
			data: {
				id: createId(),
				role: Role.STUDENT,
				orgId: project.orgId,
				projectId: params.id,
				fromId: user.id,
				form: '',
				joinCode: Math.floor(Math.random() * 1000000).toString()
			}
		});

		return {
			success: true,
			message: 'Invite created!',
			invite
		};
	}
};
