import { prisma } from '$lib/prismaConnection';
import { redirect } from '@sveltejs/kit';
import { promisify } from 'util';
import crypto from 'crypto';

const pkdf2 = promisify(crypto.pbkdf2);

export const load = async ({ cookies }) => {
	// if the user is logged in, we can skip all this stuff
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
		throw redirect(307, '/dashboard');
	} else {
		return;
	}
};

export const actions = {
	register: async ({ request, cookies }) => {
		//get all for the form data
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

		// now we need to verify that this email is in fact one of a kind which is pretty much impossible
		// we are just going to cast out certain groups here, so we will only check for lowercase and if the email already exsists

		const newEmail = email.toLowerCase();

		// check if a user with this email already exsists

		const userEmailCheck = await prisma.user.findFirst({
			where: {
				email: newEmail
			}
		});

		if (userEmailCheck) {
			return {
				success: false,
				message: 'Email already in use!'
			};
		}

		// now that that's done, we can create a salt and hash of the password
		const salt = crypto.randomBytes(32).toString('hex');
		const hash = (await pkdf2(pass1, salt, 1000, 100, 'sha512')).toString('hex');

		// now we can make the user!
		const newUser = await prisma.user.create({
			data: {
				firstName,
				lastName,
				email: newEmail,
				hash,
				salt,
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

		// creata a new session!

		const session = crypto.randomBytes(64).toString('hex');
		// add session to db
		await prisma.session.create({
			data: {
				sessionText: session,
				userId: newUser.id
			}
		});

		cookies.set('session', session, {
			secure: true,
			sameSite: 'strict',
			// 7 days
			expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
		});

		throw redirect(303, '/dashboard');
	}
};
