import { type Cookies, redirect } from '@sveltejs/kit';

import { prisma } from './prisma/prismaConnection';

export const verifyProjectUser = async (cookies: Cookies, projectId: string) => {
  if (!cookies.get('session')) {
    throw redirect(303, '/login');
  }

  const userCheck = await prisma.session.findFirst({
    where: {
      sessionText: cookies.get('session')
    },
    include: {
      user: {
        include: {
          projectUser: {
            where: {
              projectId: parseInt(projectId)
            },
            include: {
              project: true
            }
          }
        }
      }
    }
  });

  if (!userCheck?.user.projectUser[0]) {
    throw redirect(303, '/dashboard');
  }

  return userCheck.user.projectUser[0];
};
