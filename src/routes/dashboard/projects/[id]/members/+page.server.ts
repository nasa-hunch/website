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
	)
};
