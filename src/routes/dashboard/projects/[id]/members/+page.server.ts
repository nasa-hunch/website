import { redirect } from '@sveltejs/kit';
import { z } from 'zod';

import { formHandler } from '$lib/bodyguard.js';
import { ProjectUserPermission, Role } from '$lib/enums';
import { prisma } from '$lib/prismaConnection.js';
import { verifyProjectUser } from '$lib/verifyProjectUser.js';
import { verifySession } from '$lib/verifySession.js';

import { updateMemberRole } from './changeRoleHelper.js';

export const load = async ({ cookies, params }) => {
	const user = await verifySession(cookies);
	await verifyProjectUser(cookies, params.id);

	if (user.role != Role.TEACHER) {
		throw redirect(303, `/dashboard/projects/${params.id}`);
	}
};

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
