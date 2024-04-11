import { faker } from '@faker-js/faker';
import { createId } from '@paralleldrive/cuid2';
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

	for (let i = 2; i < organizationCount + 1; i++) {
		const projectIds = Array.from({
			length: 5
		}).map(createId);

		await prisma.project.createMany({
			data: projectIds.map((id, j) => ({
				id,
				submitted: Math.random() > 0.9,
				orgId: i,
				projectTemplateId: chance.integer({ min: 1, max: projectTemplateCount }),
				joinCode: 123456 + i * 10 + j
			}))
		});

		for (let j = 0; j < 5; j++) {
			const id = projectIds[j];
			
			const teacherIds = Array.from({ length: chance.weighted([1, 2], [9, 1]) }).map(createId);
			await prisma.user.createMany({
				data: await Promise.all(teacherIds.map(async (id, k) => ({
					id,
					email: `${i}@project${j}.teacher${k}`,
					firstName: faker.person.firstName(),
					lastName: faker.person.lastName(),
					role: Role.TEACHER,
					orgId: i,
					...chance.weighted([{ pfp: pickAvatar() }, {}], [0.9, 0.1]),
					...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
				})))
			});

			const studentIds = Array.from({ length: 3 }).map(createId);
			await prisma.user.createMany({
				data: await Promise.all(studentIds.map(async (id, k) => ({
					id,
					email: `${i}@project${j}.student${k}`,
					firstName: faker.person.firstName(),
					lastName: faker.person.lastName(),
					role: Role.STUDENT,
					orgId: i,
					...chance.weighted([{ pfp: pickAvatar() }, {}], [0.9, 0.1]),
					...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
				})))
			});

			const projectEditorIds = [...teacherIds, ...studentIds].map(createId);
			await prisma.projectUser.createMany({
				data: [...teacherIds, ...studentIds].map((studentId, k) => ({
					id: projectEditorIds[k],
					userId: studentId,
					projectId: id,
					permission: ProjectUserPermission.EDITOR
				}))
			});

			const unverifiedStudentIds = Array.from({ length: chance.weighted([1, 2], [9, 1]) }).map(createId);
			await prisma.user.createMany({
				data: await Promise.all(unverifiedStudentIds.map(async (id, k) => ({
					id,
					email: `${i}@project${j}.unverified${k}`,
					firstName: faker.person.firstName(),
					lastName: faker.person.lastName(),
					role: Role.STUDENT,
					orgId: i,
					...chance.weighted([{ pfp: pickAvatar() }, {}], [0.9, 0.1]),
					...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
				})))
			});

			const projectViewerIds = unverifiedStudentIds.map(createId);
			await prisma.projectUser.createMany({
				data: unverifiedStudentIds.map((studentId, k) => ({
					id: projectViewerIds[k],
					userId: studentId,
					projectId: id,
					permission: ProjectUserPermission.VIEWER
				}))
			});

			// Add zero to five tasks.
			const taskAmount = chance.weighted([0, 1, 2, 3, 4, 5], [1, 9, 9, 8, 7, 6]);
			for (let k = 0; k < taskAmount; k++) {
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
								.pickset(projectEditorIds, chance.natural({ min: 0, max: projectEditorIds.length - 1 }))
								.map((id) => ({
									userId: id
								}))
						}
					}
				});
			}
		}
	}

	console.log('Projects seeded!');
}
