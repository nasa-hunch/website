import { prisma } from '$lib/server/prisma/prismaConnection';

export async function load() {
  return {
    members: await prisma.teamMember.findMany()
  };
}
