/* 
	This script is not intended to be run 
	in production, and is only for development purposes.

	Seeds the database to represent all NASA HUNCH data from
	the 2023-2024 year period. Used for mocking real data
	used in the NASA HUNCH program.
*/

import { PrismaClient } from '@prisma/client';

import * as admin from './admin';
import * as categories from './categories';
import * as organizations from './organization';
import * as partners from './partners';
import * as projects from './projects';
import * as teams from './teams';

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

	await prisma.$transaction(
		async (tx) => {
			await partners.seed(tx);
			await teams.seed(tx);
			const templateIds = await categories.seed(tx);
			await organizations.seed(tx);
			await projects.seed(tx, templateIds);
			await admin.seed(tx);
		},
		{
			timeout: 1000 * 60 * 5,
			maxWait: 1000 * 60 * 5
		}
	);

	console.log('Database seeded!');
}

main()
	.catch((e) => {
		console.error(e);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
