/* 
	This script is not intended to be run 
	in production, and is only for development purposes.

	Seeds the database to represent all NASA HUNCH data from
	the 2023-2024 year period. Used for mocking real data
	used in the NASA HUNCH program.
*/

import { PrismaClient, ProjectUserPermission, Role } from '@prisma/client';

import { makePassword } from '../../../src/lib/server/password';
import * as categories from './categories';
import * as partners from './partners';
import * as teams from './teams';

const prisma = new PrismaClient();

async function main() {
	const org = await prisma.organization.findFirst({ where: { id: 1 } });

	if (org && org.name != 'Cardboard') {
		throw new Error(
			'Organization with id 1 already exists and is not Cardboard. Are you sure this is the right database?'
		);
	}

	if (org) {
		// We already have a Cardboard organization, so we don't need to seed
		console.log('Cardboard organization already exists, skipping seeding.');
		return;
	}

	await categories.main(prisma);
	await partners.main(prisma);
	await teams.main(prisma);

	console.log('Seeding database...');

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
					role: Role.SCHOOL_ADMIN,
					...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
				}
			},
			projects: {
				create: {
					name: 'Test Project',
					description: 'This is a test project.',
					joinCode: 123456,
					users: {
						create: {
							user: {
								create: {
									email: 'teacher@card.board',
									firstName: 'Chalk',
									lastName: 'Board',
									role: Role.TEACHER,
									...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
								}
							},
							permission: ProjectUserPermission.NEEDS_APPROVAL,
							owner: true
						}
					},
					projectTemplate: {
						connect: {
							id: 1
						}
					}
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
