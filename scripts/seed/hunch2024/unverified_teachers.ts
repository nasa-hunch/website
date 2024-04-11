import { faker } from '@faker-js/faker';
import { createId } from '@paralleldrive/cuid2';
import { Chance } from 'chance';

import { makePassword } from '../../../src/lib/server/password';
import { schools } from './dump/orgs';
import { pickAvatar } from './pickAvatar';
import { PrismaTransactionClient } from './returnType';

const chance = new Chance();

export async function seed(prisma: PrismaTransactionClient) {
	console.log('Seeding unverified teachers...');

	for (let i = 2; i < schools.length + 1; i++) {
		for (let j = 0; j < chance.pickone([1, 2]); j++) {
			await prisma.user.create({
				data: {
					id: createId(),
					email: `${i}@project${j}.unverifiedTeacher`.toLowerCase(),
					firstName: faker.person.firstName(),
					lastName: faker.person.lastName(),
					role: 'UNVERIFIED_TEACHER',
					pfp: pickAvatar(),
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
