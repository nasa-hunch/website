import { z } from 'zod';

import { Role } from '$lib/enums.js';
import { formHandler } from '$lib/server/bodyguard.js';
import { prisma } from '$lib/server/prisma/prismaConnection';
import { verifySession } from '$lib/server/verifySession.js';

export const load = async () => {
  const userList = await prisma.user.findMany({
    select: {
      id: true,
      createdAt: true,
      updatedAt: true,
      firstName: true,
      lastName: true,
      email: true,
      role: true,
      orgId: true
    }
  });

  const orgList = await prisma.organization.findMany({});
  return {
    userList,
    orgList
  };
};

export const actions = {
  verifyUser: formHandler(
    z.object({
      id: z.coerce.number(),
      orgId: z.coerce.number()
    }),
    async ({ id, orgId }, { cookies }) => {
      await verifySession(cookies, Role.HUNCH_ADMIN);

      await prisma.user.update({
        where: {
          id
        },
        data: {
          role: Role.TEACHER,
          orgId
        }
      });

      return {
        success: true,
        message: 'Teacher Verified'
      };
    }
  )
};
