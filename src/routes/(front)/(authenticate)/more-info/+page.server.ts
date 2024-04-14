import { createId } from '@paralleldrive/cuid2';
import { error, redirect } from '@sveltejs/kit';

import { ProjectUserPermission, Role } from '$lib/enums';
import { validateSession } from '$lib/server/auth.js';
import { prisma } from '$lib/server/prisma/prismaConnection';

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
	
};
