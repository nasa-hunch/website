import { prisma } from '$lib/server/prisma/prismaConnection';

export const load = async () => {
	const projects = await prisma.projectTemplate.findMany({
		where: {
			category: {
				some: {
					id: 1
				}
			}
		}
	});

	return {
		projects
	};
};
