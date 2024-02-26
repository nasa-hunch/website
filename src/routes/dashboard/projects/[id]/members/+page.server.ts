import { redirect } from '@sveltejs/kit';

import { Role } from '$lib/enums';
import { prisma } from '$lib/prismaConnection.js';
import { verifyProjectUser } from '$lib/verifyProjectUser.js';
import { verifySession } from '$lib/verifySession.js';

export const load = async ({ cookies, params }) => {
	const user = await verifySession(cookies);
	await verifyProjectUser(cookies, params.id);

	if (user.role != Role.TEACHER) {
		throw redirect(303, `/dashboard/projects/${params.id}`);
	}
};


export const actions = {
	refreshCode: async({cookies, params}) => {
		const user = await verifySession(cookies);
		await verifyProjectUser(cookies, params.id);

		if (user.role != Role.TEACHER) {
			return {
				success: false,
				message: "Not a teacher"
			}
		}

		await prisma.project.update({
			where: {
				id: parseInt(params.id)
			}, data: {
				joinCode: 1e7 + Math.floor(Math.random() * 9e7)
			}
		})

		return {
			success: true,
			message: "Code Refreshed"
		}

		


	}
}
