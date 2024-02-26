import type { Cookies } from '@sveltejs/kit';

import type { ProjectUserPermission } from '$lib/enums';
import { prisma } from '$lib/prismaConnection';
import { verifyProjectUser } from '$lib/verifyProjectUser';

import type { RouteParams } from './$types';

export const updateMemberRole = async (
	memberId: number,
	permission: ProjectUserPermission,
	cookies: Cookies,
	params: RouteParams
) => {
	const projectUser = await verifyProjectUser(cookies, params.id);
	if (!projectUser.owner) {
		return {
			success: false,
			message: 'No permissions'
		};
	}

	const updatingProjectUser = await prisma.projectUser.findFirst({
		where: {
			AND: {
				projectId: parseInt(params.id),
				id: memberId
			}
		}
	});

	if (!updatingProjectUser) {
		return {
			success: true,
			message: 'No user.'
		};
	}

	await prisma.projectUser.update({
		where: {
			id: updatingProjectUser.id
		},
		data: {
			permission: permission
		}
	});

	return {
		success: true,
		message: 'User Updated!'
	};
};
