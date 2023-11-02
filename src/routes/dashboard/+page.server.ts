import { prisma } from '$lib/prismaConnection';
import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	// if the user isn't logged in, we need to redirect them to the login page
	const session = cookies.get('session');
	if (!session) {
		throw redirect(307, '/login');
	}

	const sessionCheck = await prisma.session.findFirst({
		where: {
			sessionText: session
		}
	});

	// We have a valid session!
	if (sessionCheck) {
		return;
	}

	throw redirect(307, '/dashboard');
};
