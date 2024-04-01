import { error, redirect } from '@sveltejs/kit';

import { Role } from '$lib/enums';
import { prisma } from '$lib/server/prisma/prismaConnection';

export const load = async ({ params, parent }) => {
  const parentData = await parent();
  const id = parseInt(params.id);

  const projectUser = await prisma.projectUser.findFirst({
    where: {
      AND: {
        userId: parentData.user.id,
        projectId: id
      }
    }
  });

  if ((!projectUser || projectUser == null) && parentData.user.role != Role.HUNCH_ADMIN) {
    error(404, 'Project not found');
  }

  const project = await prisma.project.findFirst({
    where: {
      id: id
    },
    include: {
      users: {
        include: {
          user: {
            select: {
              firstName: true,
              lastName: true,
              pfp: true
            }
          }
        }
      }
    }
  });

  if (!project || project == null) {
    error(404, 'Project not found');
  }

  if (project.submitted) {
    throw redirect(303, '/dashboard/congrats');
  }

  return {
    project
  };
};
