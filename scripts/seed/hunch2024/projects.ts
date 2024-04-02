import { faker } from '@faker-js/faker';
import { Chance } from 'chance';

import { makePassword } from '../../../src/lib/server/password';
import { PrismaTransactionClient } from './returnType';

const chance = new Chance();

export async function seed(prisma: PrismaTransactionClient) {
	console.log('Seeding projects...');

	// For every organization, create 5 projects
	const projectTemplateCount = await prisma.projectTemplate.count();
	const organizationCount = await prisma.organization.count();

	for (let i = 1; i <= organizationCount; i++) {
		for (let j = 0; j < 5; j++) {
			const project = await prisma.project.create({
				data: {
					organization: {
						connect: {
							id: i
						}
					},
					projectTemplate: {
						connect: {
							id: Math.floor(Math.random() * projectTemplateCount) + 1
						}
					},
					joinCode: 123456 + i * 10 + j
				}
			});

			await prisma.projectUser.create({
				data: {
					project: {
						connect: {
							id: project.id
						}
					},
					user: {
						create: {
							email: `${i}@project${j}.teacher`,
							firstName: faker.person.firstName(),
							lastName: faker.person.lastName(),
							role: 'TEACHER',
							...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
						}
					},
					permission: 'EDITOR'
				}
			});

			// Add three verified students
			for (let k = 0; k < 3; k++) {
				await prisma.projectUser.create({
					data: {
						project: {
							connect: {
								id: project.id
							}
						},
						user: {
							create: {
								email: `${i}@project${j}.student${k}`,
								firstName: faker.person.firstName(),
								lastName: faker.person.lastName(),
								role: 'STUDENT',
								...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
							}
						},
						permission: 'EDITOR'
					}
				});
			}

			// Add one or two unverified students
			for (let k = 0; k < chance.pickone([1, 2]); k++) {
				await prisma.projectUser.create({
					data: {
						project: {
							connect: {
								id: project.id
							}
						},
						user: {
							create: {
								email: `${i}@project${j}.unverified${k}`,
								firstName: faker.person.firstName(),
								lastName: faker.person.lastName(),
								role: 'STUDENT',
								...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
							}
						},
						permission: 'NEEDS_APPROVAL'
					}
				});
			}
		}
	}

	console.log('Projects seeded!');
}
