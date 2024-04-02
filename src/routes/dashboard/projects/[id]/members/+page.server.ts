import { redirect } from '@sveltejs/kit';
import { z } from 'zod';

import { ProjectUserPermission, Role } from '$lib/enums';
import { formHandler } from '$lib/server/bodyguard.js';
import { prisma } from '$lib/server/prisma/prismaConnection.js';
import { verifyProjectUser } from '$lib/server/verifyProjectUser.js';
import { verifySession } from '$lib/server/verifySession.js';

import { updateMemberRole } from './changeRoleHelper.js';


export const actions = {
	refreshCode: async ({ cookies, params }) => {
		const user = await verifySession(cookies);
		await verifyProjectUser(cookies, params.id);

		if (user.role != Role.TEACHER) {
			return {
				success: false,
				message: 'Not a teacher'
			};
		}

		await prisma.project.update({
			where: {
				id: parseInt(params.id)
			},
			data: {
				joinCode: 1e7 + Math.floor(Math.random() * 9e7)
			}
		});

		return {
			success: true,
			message: 'Code Refreshed'
		};
	},
	makeViewer: formHandler(
		z.object({
			memberId: z.coerce.number()
		}),
		async ({ memberId }, { cookies, params }) => {
			return await updateMemberRole(memberId, ProjectUserPermission.VIEWER, cookies, params);
		}
	),
	makeEditor: formHandler(
		z.object({
			memberId: z.coerce.number()
		}),
		async ({ memberId }, { cookies, params }) => {
			return await updateMemberRole(memberId, ProjectUserPermission.EDITOR, cookies, params);
		}
	),
	makeNone: formHandler(
		z.object({
			memberId: z.coerce.number()
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
			memberId: z.coerce.number()
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
						projectId: parseInt(params.id),
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
	)
};
