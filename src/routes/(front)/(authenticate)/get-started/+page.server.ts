import { redirect } from '@sveltejs/kit';
import crypto from 'crypto';

import { makePassword } from '$lib/server/password';
import { prisma } from '$lib/server/prisma/prismaConnection';

export const load = async ({ cookies }) => {
	// If the user is logged in, we can skip all this stuff
	const session = cookies.get('session');
	if (!session) {
		return;
	}

	const sessionCheck = await prisma.session.findFirst({
		where: {
			sessionText: session
		}
	});
	if (sessionCheck) {
		redirect(307, '/dashboard');
	} else {
		return;
	}
};

export const actions = {
	register: async ({ request, cookies, getClientAddress }) => {
		// Get all for the form data
		const formData = await request.formData();

		const firstName = formData.get('firstName')?.toString();
		const lastName = formData.get('lastName')?.toString();
		const email = formData.get('email')?.toString();
		const pass1 = formData.get('pass1')?.toString();
		const pass2 = formData.get('pass2')?.toString();

		if (!firstName || !lastName || !email || !pass1 || !pass2) {
			return {
				success: false,
				message: 'Please fill all required fields.'
			};
		}

		if (pass1 !== pass2) {
			return {
				success: false,
				message: 'Passwords do not match!'
			};
		}

		// Check if a user with this email already exists
		const userEmailCheck = await prisma.user.findFirst({
			where: {
				email: {
					equals: email,
					mode: 'insensitive'
				}
			}
		});

		if (userEmailCheck) {
			return {
				success: false,
				message: 'Email already in use!'
			};
		}

		// Now we can make the user!
		const newUser = await prisma.user.create({
			data: {
				firstName,
				lastName,
				email,
				...(await makePassword(pass1)),
				createdAt: new Date(Date.now()),
				updatedAt: new Date(Date.now()),
				role: null,
				orgId: null
			}
		});

		if (!newUser) {
			return {
				success: false,
				message: 'Something went wrong :('
			};
		}

		// Create a new session!
		const session = crypto.randomBytes(64).toString('hex');
		await prisma.session.create({
			data: {
				sessionText: session,
				userId: newUser.id,
				ip: getClientAddress(),
				userAgent: request.headers.get('user-agent') || 'Unknown'
			}
		});

		cookies.set('session', session, {
			secure: process.env.NODE_ENV != 'development' && !process.env.CI,
			sameSite: 'strict',
			path: '/',
			// 7 days
			expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
		});

		redirect(303, '/dashboard');
	}
};
