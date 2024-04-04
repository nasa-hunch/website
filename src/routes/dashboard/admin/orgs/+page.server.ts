import { prisma } from '$lib/server/prisma/prismaConnection';

export const load = async () => {
	return {
		organizations: await prisma.organization.findMany()
	};
};
