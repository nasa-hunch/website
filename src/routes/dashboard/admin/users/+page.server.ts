import { prisma } from "$lib/prismaConnection"


export let load = async () => {
	let userList = await prisma.user.findMany();
	return {
		userList
	};
}