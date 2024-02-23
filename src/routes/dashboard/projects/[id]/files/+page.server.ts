import { ProjectUserPermission } from '$lib/enums.js';
import { prisma } from '$lib/prismaConnection';
import { uploadFile } from '$lib/uploadFile.js';
import { verifySession } from '$lib/verifySession.js';

export const load = async ({ parent }) => {
	const parentData = await parent();

	const files = await prisma.file.findMany({
		where: {
			projectId: parentData.project.id
		}
	});

	return {
		files
	};
};

export const actions = {
	uploadFile: async ({ request, cookies, params }) => {
		const user = await verifySession(cookies);

		const projectUser = await prisma.projectUser.findFirst({
			where: {
				AND: {
					userId: user.id,
					projectId: parseInt(params.id)
				}
			}
		});

		console.log(projectUser);

		if (projectUser?.permission != ProjectUserPermission.EDITOR) {
			return {
				success: false,
				message: 'No Permissions'
			};
		}

		return await uploadFile(request, projectUser.projectId);
	}
};
