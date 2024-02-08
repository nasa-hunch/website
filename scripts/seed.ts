import { PrismaClient, Role } from '@prisma/client';
import crypto from 'crypto';
import { promisify } from 'util';

const pkdf2 = promisify(crypto.pbkdf2);

const prisma = new PrismaClient();

interface PasswordData {
	hash: string;
	salt: string;
}

async function makePassword(password: string): Promise<PasswordData> {
	const salt = crypto.randomBytes(32).toString('hex');
	const hash = (await pkdf2(password, salt, 1000, 100, 'sha512')).toString('hex');

	return { hash, salt };
}

async function main() {
	const org = await prisma.organization.findFirst({ where: { id: 1 } });

	if (org && org.name != 'Cardboard') {
		throw new Error(
			'Organization with id 1 already exists and is not Cardboard. Are you sure this is the right database?'
		);
	}

	console.log('Seeding database...');

	await prisma.organization.upsert({
		where: { id: 1, name: 'Cardboard' },
		update: {},
		create: {
			name: 'Cardboard',
			projects: {
				create: {
					name: 'Test Project',
					description: 'This is a test project.',
					joinCode: 123456,
					owner: {
						create: {
							email: 'teacher@card.board',
							firstName: 'Chalk',
							lastName: 'Board',
							role: Role.TEACHER,
							organization: {
								connect: {
									id: 1
								}
							},
							...(await makePassword('password'))
						}
					}
				}
			},
			users: {
				create: {
					email: 'admin@card.board',
					firstName: 'Admin',
					lastName: 'Cardboard',
					role: Role.SCHOOL_ADMIN,
					...(await makePassword('school_admin'))
				}
			}
		}
	});

	await prisma.user.upsert({
		where: { email: 'admin@nasa.fake' },
		update: {},
		create: {
			email: 'admin@nasa.fake',
			firstName: 'Admin',
			lastName: 'NASA',
			role: Role.HUNCH_ADMIN,
			...(await makePassword('hunch_admin'))
		}
	});

	console.log('Database seeded!');
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
	});
