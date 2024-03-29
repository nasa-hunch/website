import { redirect } from '@sveltejs/kit';

import { prisma } from '$lib/server/prisma/prismaConnection.js';

export const actions = {
	default: async ({ cookies }) => {
		// Get the session cookie
		const session = cookies.get('session');
		if (!session) {
			return;
		}

		const hasSession = await prisma.session.findFirst({
			where: {
				sessionText: session
			}
		});

		if (hasSession) {
			/* @migration task: add path argument */ cookies.delete('session', {
				path: '/'
			});
		}

		redirect(303, '/login');
	}
};
