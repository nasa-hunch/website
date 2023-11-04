import { error, redirect } from '@sveltejs/kit';
import { prisma } from '$lib/prismaConnection.js';
import { Role } from '@prisma/client';

export const load = async ({ cookies }) => {
	// if the user isn't logged in, we need to redirect them to the login page
	const session = cookies.get('session');
	if (!session) {
		throw redirect(303, '/login');
	}

	const sessionCheck = await prisma.session.findFirst({
		where: {
			sessionText: session
		},
		include: {
			user: true
		}
	});

	// We have a valid session!
	if (!sessionCheck || !sessionCheck.user) {
		throw redirect(303, '/login');
	}

	const user = sessionCheck.user;

	return {
		user
	};
};

export const actions = {
	setRoleStudent: async ({ cookies }) => {
		const session = cookies.get('session');
		if (!session) {
			throw redirect(303, '/login');
		}

		const sessionCheck = await prisma.session.findFirst({
			where: {
				sessionText: session
			},
			include: {
				user: true
			}
		});

		// We have a valid session!
		if (!sessionCheck || !sessionCheck.user) {
			throw redirect(303, '/login');
		}

		const user = sessionCheck.user;

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
		const session = cookies.get('session');
		if (!session) {
			throw redirect(303, '/login');
		}

		const sessionCheck = await prisma.session.findFirst({
			where: {
				sessionText: session
			},
			include: {
				user: true
			}
		});

		// We have a valid session!
		if (!sessionCheck || !sessionCheck.user) {
			throw redirect(303, '/login');
		}

		const user = sessionCheck.user;

		await prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				role: Role.UNVERIFIED_TEACHER
			}
		});
	},
	rescindRole: async ({ cookies }) => {
		const session = cookies.get('session');
		if (!session) {
			throw redirect(303, '/login');
		}

		const sessionCheck = await prisma.session.findFirst({
			where: {
				sessionText: session
			},
			include: {
				user: true
			}
		});

		// We have a valid session!
		if (!sessionCheck || !sessionCheck.user) {
			throw redirect(303, '/login');
		}

		const user = sessionCheck.user;

		if (user.orgid == null) {
			await prisma.user.update({
				where: {
					id: user.id
				},
				data: {
					role: null
				}
			});
		} else {
			throw error(400, 'You cannot rescind your role if you are a member of an organization.');
		}
	}
};
