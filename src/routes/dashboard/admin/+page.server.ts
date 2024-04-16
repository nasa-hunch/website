import { prisma } from '$lib/server/prisma/prismaConnection';

export const load = async () => {
	return {
		orgCount: await prisma.organization.count(),
		userCount: await prisma.user.count(),
		projectCount: await prisma.project.count()
	};
};
