import { faker } from '@faker-js/faker';
import { ProjectUserPermission, Role } from '@prisma/client';
import { Chance } from 'chance';

import { makePassword } from '../../../src/lib/server/password';
import { schools } from './dump/orgs'
import { pickAvatar } from './pickAvatar';
import { PrismaTransactionClient } from './returnType';

const chance = new Chance();

export async function seed(prisma: PrismaTransactionClient, projectTemplateCount: number) {
	console.log('Seeding projects...');

	// For every organization, create 5 projects
	const organizationCount = schools.length + 1;

	for (let i = 2; i <= organizationCount + 2; i++) {
		for (let j = 0; j < 5; j++) {
			console.log(`Creating project ${j} for organization ${i}`);
			const { users, id } = await prisma.project.create({
				data: {
					submitted: Math.random() > 0.9,
					organization: {
						connect: {
							id: i
						}
					},
					projectTemplate: {
						connect: {
							id: chance.integer({ min: 1, max: projectTemplateCount })
						}
					},
					joinCode: 123456 + i * 10 + j,
					users: {
						create: [
							// Add one or two teachers
							...await Promise.all(Array.from({ length: chance.weighted([1, 2], [9, 1]) }, async () => ({
								user: {
									create: {
										email: `${i}@project${j}.teacher`,
										firstName: faker.person.firstName(),
										lastName: faker.person.lastName(),
										role: Role.TEACHER,
										orgId: i,
										...chance.weighted([{ pfp: pickAvatar() }, {}], [0.9, 0.1]),
										...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
									}
								},
								permission: ProjectUserPermission.EDITOR
							}))),
							// Add three verified students
							...await Promise.all(Array.from({ length: 3 }, async (_, k) => ({
								user: {
									create: {
										email: `${i}@project${j}.student${k}`,
										firstName: faker.person.firstName(),
										lastName: faker.person.lastName(),
										role: Role.STUDENT,
										orgId: i,
										...chance.weighted([{ pfp: pickAvatar() }, {}], [0.9, 0.1]),
										...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
									}
								},
								permission: ProjectUserPermission.EDITOR
							}))),
							// Add one or two unverified students
							...await Promise.all(Array.from({ length: chance.weighted([1, 2], [9, 1]) }, async (_, k) => ({
								user: {
									create: {
										email: `${i}@project${j}.unverified${k}`,
										firstName: faker.person.firstName(),
										lastName: faker.person.lastName(),
										role: Role.STUDENT,
										orgId: i,
										...chance.weighted([{ pfp: pickAvatar() }, {}], [0.9, 0.1]),
										...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
									}
								},
								permission: ProjectUserPermission.NEEDS_APPROVAL
							})))
						]
					}
				},
				include: {
					users: {
						select: {
							id: true
						}
					}
				}
			});

			// Add zero to five tasks.
			for (let k = 0; k < chance.weighted([0, 1, 2, 3, 4, 5], [1, 9, 9, 8, 7, 6]); k++) {
				await prisma.toDoItem.create({
					data: {
						name: chance.capitalize(faker.company.buzzPhrase()),
						checked: chance.weighted([true, false], [1, 2]),
						project: {
							connect: {
								id
							}
						},
						assignees: {
							create: chance
								.pickset(users, chance.natural({ min: 0, max: users.length - 1 }))
								.map((user) => ({
									projectUser: {
										connect: {
											id: user.id
										}
									}
								}))
						}
					}
				});
			}
		}
	}

	console.log('Projects seeded!');
}
