import { prisma } from '$lib/prismaConnection';
import { Role } from '@prisma/client';
import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	// if the user isn't logged in, we need to redirect them to the login page
	const session = cookies.get('session');
	if (!session) {
		throw redirect(303, '/login');
	}

	const sessionCheck = await prisma.session.findFirst({
		where: {
			sessionText: session
		},
		include: {
			user: true
		}
	});

	// We have a valid session!
	if (!sessionCheck || !sessionCheck.user) {
		throw redirect(303, '/login');
	}

	const user = sessionCheck.user;
	if (user.role == null) {
		//we need more info from the user
		throw redirect(303, '/more-info');
	}

	if (user.orgId == null && user.role != Role.HUNCH_ADMIN) {
		throw redirect(303, '/more-info');
	}

	return {
		user: {
			id: user.id,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			role: user.role,
			orgId: user.orgId
		}
	};
};
