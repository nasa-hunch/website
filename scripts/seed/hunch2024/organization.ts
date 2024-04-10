import { faker } from '@faker-js/faker';
import { Role } from '@prisma/client';

import { makePassword } from '../../../src/lib/server/password';
import { schools } from './dump/orgs'
import { pickAvatar } from './pickAvatar';
import { PrismaTransactionClient } from './returnType';

export async function seed(prisma: PrismaTransactionClient) {
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
					role: Role.SCHOOL_ADMIN,
					pfp: pickAvatar(),
					...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
				}
			}
		}
	});

	// Make other organizations
	for (let i = 2; i < schools.length + 2; i++) {
		await prisma.organization.create({
			data: {
				name: schools[i - 2].name,
				users: {
					create: {
						email: `${i}@org.admin`,
						firstName: faker.person.firstName(),
						lastName: faker.person.lastName(),
						role: Role.SCHOOL_ADMIN,
						pfp: pickAvatar(),
						...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
					}
				}
			}
		});
	}
}
