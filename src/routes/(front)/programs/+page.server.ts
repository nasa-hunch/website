import { prisma } from '$lib/server/prisma/prismaConnection';

export async function load() {
	return {
		categories: await prisma.category.findMany()
	};
}