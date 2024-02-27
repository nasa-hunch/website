import { prisma } from '$lib/prismaConnection.js';
import { verifyProjectUser } from '$lib/verifyProjectUser.js';

export const load = () => {};

export const actions = {
	voteSubmit: async ({ cookies, params }) => {
		const projectUser = await verifyProjectUser(cookies, params.id);

		await prisma.projectUser.update({
			where: {
				id: projectUser.id
			},
			data: {
				voteSubmit: !projectUser.voteSubmit
			}
		});

		return {
			success: true,
			message: 'Vote Changed!'
		};
	}
};
