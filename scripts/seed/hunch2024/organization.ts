import { faker } from '@faker-js/faker';
import { Role } from '@prisma/client';
import Chance from 'chance';

import { makePassword } from '../../../src/lib/server/password';
import { PrismaTransactionClient } from './returnType';

const chance = new Chance();

function generateOrgName() {
	const school = chance.pickone(['High School', 'College', 'Academy', 'University']);
	const name = chance.pickone([
		faker.company.name(),
		faker.location.city(),
		faker.person.fullName(),
		faker.word.noun()
	]);
	return `${name.charAt(0).toUpperCase()}${name.slice(1)} ${school}`;
}

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
					...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
				}
			}
		}
	});

	// Make 99 more organizations
	for (let i = 2; i <= 100; i++) {
		await prisma.organization.create({
			data: {
				name: generateOrgName(),
				users: {
					create: {
						email: `${i}@org.admin`,
						firstName: faker.person.firstName(),
						lastName: faker.person.lastName(),
						role: Role.SCHOOL_ADMIN,
						...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
					}
				}
			}
		});
	}
}
