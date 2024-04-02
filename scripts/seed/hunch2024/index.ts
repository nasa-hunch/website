/* 
	This script is not intended to be run 
	in production, and is only for development purposes.

	Seeds the database to represent all NASA HUNCH data from
	the 2023-2024 year period. Used for mocking real data
	used in the NASA HUNCH program.
*/

import { PrismaClient, Role } from '@prisma/client';

import { makePassword } from '../../../src/lib/server/password';
import * as categories from './categories';
import * as organizations from './organization';
import * as partners from './partners';
import * as projects from './projects';
import * as teams from './teams';
import * as unverifiedTeachers from './unverified_teachers';

const prisma = new PrismaClient();

async function main() {
	const org = await prisma.organization.findFirst({ where: { id: 1 } });

	if (org && org.name != 'Cardboard') {
		console.error(
			'Organization with id 1 already exists and is not Cardboard. Are you sure this is the right database?'
		);
		return;
	}

	if (org) {
		// We already have a Cardboard organization, so we don't need to seed
		console.error('Cardboard organization already exists, skipping seeding.');
		return;
	}

	console.log('Seeding database...');
	await partners.seed(prisma);
	await teams.seed(prisma);
	await categories.seed(prisma);
	await organizations.seed(prisma);
	await projects.seed(prisma);
	await unverifiedTeachers.seed(prisma);

	console.log("Adding NASA HUNCH Admin user...");
	await prisma.user.upsert({
		where: { email: 'admin@nasa.fake' },
		update: {},
		create: {
			email: 'admin@nasa.fake',
			firstName: 'Admin',
			lastName: 'NASA',
			role: Role.HUNCH_ADMIN,
			...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
		}
	});

	console.log('Database seeded!');
}

main()
	.catch((e) => {
		console.error(e);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
