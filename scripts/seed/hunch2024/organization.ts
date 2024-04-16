import { faker } from '@faker-js/faker';
import { createId } from '@paralleldrive/cuid2';
import { Role } from '@prisma/client';

import { makePassword } from '../../../src/lib/server/password';
import { nasa, schools } from './dump/orgs';
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
				create: [
					{
						id: createId(),
						email: 'admin@card.board',
						firstName: 'Admin',
						lastName: 'Cardboard',
						role: Role.ORG_ADMIN,
						pfp: pickAvatar(),
						...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
					},
					{
						id: createId(),
						email: 'teacher@card.board',
						firstName: 'Teacher',
						lastName: 'Cardboard',
						role: Role.TEACHER,
						pfp: pickAvatar(),
						...(await makePassword(process.env.PASSWORD_DEMO || 'password'))
					}
				]
			}
		}
	});

	// Make other organizations
	await prisma.organization.createMany({
		data: schools.map((school, i) => ({
			id: i + 2,
			name: school.name
		}))
	});

	// Make organization locations
	await prisma.location.createMany({
		data: schools.map((school, i) => ({
			id: i + 2,
			orgId: i + 2,
			name: school.name,
			address: school.address.address,
			city: school.address.city,
			state: school.address.state,
			zip: school.address.zip,
			coordinates: `${school.location.lat},${school.location.lng}`
		}))
	});

	// Make NASA location
	await prisma.location.createMany({
		data: nasa.map((nasa, i) => ({
			id: i + schools.length + 2,
			orgId: 1,
			name: nasa.name,
			address: nasa.address.address,
			city: nasa.address.city,
			state: nasa.address.state,
			zip: nasa.address.zip,
			coordinates: `${nasa.location.lat},${nasa.location.lng}`
		}))
	});

	// Attach admins to organizations
	await prisma.user.createMany({
		data: await Promise.all(
			schools.map(async (_, i) => ({
				id: createId(),
				email: `${i + 2}@org.admin`,
				firstName: faker.person.firstName(),
				lastName: faker.person.lastName(),
				role: Role.ORG_ADMIN,
				pfp: pickAvatar(),
				orgId: i + 2,
				...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
			}))
		)
	});

	console.log('Organizations seeded!');
}
