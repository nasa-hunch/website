import { PrismaClient, ProjectUserPermission, Role } from '@prisma/client';
import { promisify } from 'util';
import crypto from 'crypto';

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
	const org = await prisma.organization.findFirst({ where: { id: 0 } });

	if (org && org.name != 'Cardboard') {
		throw new Error(
			'Organization with id 0 already exists and is not Cardboard. Are you sure this is the right database?'
		);
	}

	console.log('Seeding database...');

	await prisma.organization.upsert({
		where: { id: 0, name: 'Cardboard' },
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
							email: 'a@b.c',
							firstName: 'Chalk',
							lastName: 'Board',
							role: Role.TEACHER,
							...(await makePassword('password'))
						}
					}
				}
			}
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
		process.exit(1);
	});
