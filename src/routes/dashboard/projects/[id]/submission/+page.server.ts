import { prisma } from '$lib/server/prisma/prismaConnection.js';
import { verifyProjectUser } from '$lib/server/verifyProjectUser.js';

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
	},
	submit: async ({ cookies, params }) => {
		await verifyProjectUser(cookies, params.id);

		const allUsers = await prisma.projectUser.findMany({
			where: {
				AND: {
					projectId: parseInt(params.id),
					voteSubmit: false
				}
			}
		});

		if (allUsers.length > 0) {
			return {
				success: false,
				message: 'Missing votes'
			};
		}

		await prisma.project.update({
			where: {
				id: parseInt(params.id)
			},
			data: {
				submitted: true,
				submissionDate: new Date()
			}
		});
	}
};
