import { faker } from '@faker-js/faker';
import { Chance } from 'chance';

import { makePassword } from '../../../src/lib/server/password';
import { PrismaTransactionClient } from './returnType';

const chance = new Chance();

export async function seed(client: PrismaTransactionClient) {
	console.log('Seeding unverified teachers...');

	const orgCount = await client.organization.count();

	for (let i = 1; i <= orgCount; i++) {
		for (let j = 0; j < chance.pickone([1, 2]); j++) {
			await client.user.create({
				data: {
					email: `${i}@project${j}.unverifiedTeacher`,
					firstName: faker.person.firstName(),
					lastName: faker.person.lastName(),
					role: 'TEACHER',
					...(await makePassword('password' + process.env.PASSWORD_SUFFIX || '')),
					organization: {
						connect: {
							id: i
						}
					}
				}
			});
		}
	}

	console.log('Unverified teachers seeded!');
}
