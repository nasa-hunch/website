import { faker } from '@faker-js/faker';
import { Role } from '@prisma/client';

import { makePassword } from '../../../src/lib/server/password';
import { schools } from './dump/orgs'
import { pickAvatar } from './pickAvatar';
import { PrismaTransactionClient } from './returnType';

export async function seed(prisma: PrismaTransactionClient) {
	console.log('Seeding organizations...');

	// Make the base organization
	await prisma.organization.upsert({
		where: { id: 1, name: 'Cardboard' },
		update: {},
		create: {
			name: 'Cardboard',
			users: {
				create: {
					email: 'admin@card.board',
					firstName: 'Admin',
					lastName: 'Cardboard',
					role: Role.ORG_ADMIN,
					pfp: pickAvatar(),
					...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
				}
			}
		}
	});

	// Make other organizations
	await prisma.organization.createMany({
		data: schools.map((school, i) => ({
			id: i + 2,
			name: school.name,
		}))
	});

	// Attach admins to organizations
	await prisma.user.createMany({
		data: await Promise.all(schools.map(async (_, i) => ({
			email: `${i + 2}@org.admin`,
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			role: Role.ORG_ADMIN,
			pfp: pickAvatar(),
			orgId: i + 2,
			...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
		})))
	});

	console.log('Organizations seeded!');
}
