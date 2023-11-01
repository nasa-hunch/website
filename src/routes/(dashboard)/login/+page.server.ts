import { prisma } from '$lib/prismaConnection.js';
import { redirect } from '@sveltejs/kit';
import crypto from 'crypto';

export const actions = {
	login: async ({ request, cookies }) => {
		//get all for the form data
		let formData = await request.formData();

		let email = formData.get('email')?.toString();
		let password = formData.get('password')?.toString();

		if (!email || !password) {
			return {
				success: false,
				message: 'Please fill all required fields.'
			};
		}

		//pull the user from the database
		let newEmail = email.toLowerCase();

		let user = await prisma.user.findFirst({
			where: {
				email: newEmail
			}
		});

		if (!user) {
			return {
				success: false,
				message: 'Email or password is incorrect.'
			};
		}

		//get the salt and rehash the password
		let salt = user.salt;
		let hash = crypto.pbkdf2Sync(password, salt, 1000, 100, 'sha512').toString('hex');

		if (hash != user.hash) {
			return {
				success: false,
				message: 'Email or password is incorrect.'
			};
		}

		//generate a new session for the user

		let sessionToken = crypto.randomBytes(32).toString('hex');
		let newSession = await prisma.session.create({
			data: {
				sessionText: sessionToken,
				userId: user.id
			}
		});

		cookies.set('session', sessionToken, {
			secure: true,
			sameSite: 'strict',
			expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
		});

		throw redirect(303, '/dashboard');
	}
};
