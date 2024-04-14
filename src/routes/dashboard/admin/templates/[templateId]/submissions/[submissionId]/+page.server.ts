import { prisma } from '$lib/server/prisma/prismaConnection';

export const load = async ({ parent, params }) => {
	const parentData = await parent();

	const submissions = await prisma.project.findFirst({
		where: {
			AND: {
				submitted: true,
				projectTemplateId: parentData.projectTemplate.id,
                id: params.submissionId
			}
		},
		include: {
			organization: true
		}
	});

	return {
		submissions
	};
};
