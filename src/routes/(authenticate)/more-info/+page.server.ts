import { error, redirect } from '@sveltejs/kit';

import { validateSession } from '$lib/auth.js';
import { ProjectUserPermission, Role } from '$lib/enums';
import { prisma } from '$lib/prismaConnection';

export const load = async ({ cookies }) => {
	const user = await validateSession(cookies.get('session'), {
		projectUser: true
	});

	if (
		(user.role == Role.STUDENT && user.projectUser.length != 0) ||
		(user.role == Role.TEACHER && user.organization != null) ||
		user.role == Role.HUNCH_ADMIN
	) {
		redirect(303, '/dashboard');
	}

	return {
		user
	};
};

export const actions = {
	setRoleStudent: async ({ cookies }) => {
		const user = await validateSession(cookies.get('session'));

		await prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				role: Role.STUDENT
			}
		});
	},
	setRoleTeacher: async ({ cookies }) => {
		const user = await validateSession(cookies.get('session'));
		await prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				role: Role.UNVERIFIED_TEACHER
			}
		});
	},
	submitJoinCode: async ({ cookies, request }) => {
		const data = await request.formData();

		const code = data.get('code');

		if (!code) {
			error(400, 'No code provided.');
		}

		const user = await validateSession(cookies.get('session'));

		const project = await prisma.project.findUnique({
			where: {
				joinCode: parseInt(code.toString())
			},
			include: {
				users: true
			}
		});

		if (!project) {
			error(400, 'Invalid code.');
		}

		if (project.users.find((u) => u.id == user.id)) {
			error(400, 'You are already a member of this project.');
		}

		await prisma.projectUser.create({
			data: {
				project: {
					connect: {
						id: project.id
					}
				},
				user: {
					connect: {
						id: user.id
					}
				},
				permission: ProjectUserPermission.NEEDS_APPROVAL
			}
		});

		redirect(303, '/dashboard');
	},
	rescindRole: async ({ cookies }) => {
		const user = await validateSession(cookies.get('session'));

		if (user.orgId == null) {
			await prisma.user.update({
				where: {
					id: user.id
				},
				data: {
					role: null
				}
			});
		} else {
			error(400, 'You cannot rescind your role if you are a member of an organization.');
		}
	}
};
