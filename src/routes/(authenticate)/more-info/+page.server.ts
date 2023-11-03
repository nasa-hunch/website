import { redirect } from '@sveltejs/kit';
import { prisma } from '$lib/prismaConnection.js';

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
		throw redirect(303, "/login")
	}

	let user = sessionCheck.user
 
	return {
		user
	}
};

export let actions = {
	setRoleStudent: async ({cookies}) => {
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
			throw redirect(303, "/login")
		}

		let user = sessionCheck.user
	
		let newUser = await prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				role: 4
			}
		})
		return
	},
	setRoleTeacher: async ({cookies}) => {
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
			throw redirect(303, "/login")
		}

		let user = sessionCheck.user
	
		let newUser = await prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				role: 1
			}
		})
		return
	},
}