import { faker } from '@faker-js/faker';
import { createId } from '@paralleldrive/cuid2';
import { ProjectUserPermission, Role } from '@prisma/client';
import { Chance } from 'chance';

import { makePassword } from '../../../src/lib/server/password';
import { schools } from './dump/orgs';
import { pickAvatar } from './pickAvatar';
import { PrismaTransactionClient } from './returnType';

const chance = new Chance();

const arr = <T>(length: number, fn: (i: number) => T): T[] => Array.from({ length }, (_, i) => fn(i));

export async function seed(prisma: PrismaTransactionClient, projectTemplateCount: number) {
	console.log('Seeding projects...');

	const organizationCount = schools.length;

	const allIds = arr(organizationCount, (id) => arr(chance.pickone([4, 5, 6]), () => {
		const projectId = createId();

		const idInfo = {
			orgId: id + 2,
			projectId,
		}

		const baseSeeding = {
			...idInfo,
			teacherIds: arr(chance.weighted([1, 2], [9, 1]), () => ({
				userId: createId(),
				projectUserId: createId(),
				...idInfo,
			})),
			studentIds: arr(3, () => ({
				userId: createId(),
				projectUserId: createId(),
				...idInfo,
			})),
			unverifieduserIds: arr(chance.weighted([1, 2], [9, 1]), () => ({
				userId: createId(),
				projectUserId: createId(),
				...idInfo,
			}))
		}

		const editorIds = [
			...baseSeeding.teacherIds,
			...baseSeeding.studentIds
		];

		return {
			...baseSeeding,
			taskIds: arr(chance.weighted([0, 1, 2, 3, 4, 5], [1, 10, 11, 10, 9, 8]), () => ({
				id: createId(),
				assigneeIds: chance.pickset(
					editorIds,
					chance.natural({ min: 0, max: editorIds.length - 1 })
				),
				...idInfo,
			}))
		}
 	}));

	// Batch create every project
	await prisma.project.createMany({
		data: allIds.flat().map(({ projectId, orgId }, i) => ({
			id: projectId,
			submitted: Math.random() > 0.9,
			orgId,
			projectTemplateId: chance.integer({ min: 1, max: projectTemplateCount }),
			joinCode: 123456 + i
		}))
	});

	// Batch create teachers
	const teacherIds = allIds.flat().map((id) => id.teacherIds).flat();
	await prisma.user.createMany({
		data: await Promise.all(teacherIds.map(async ({ userId, orgId }) => ({
			id: userId,
			email: `${userId}@teacher.com`,
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			role: Role.TEACHER,
			orgId,
			...chance.weighted([{ pfp: pickAvatar() }, {}], [0.9, 0.1]),
			...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
		})))
	});

	// Batch create students
	const studentIds = allIds.flat().map((id) => id.studentIds).flat();
	await prisma.user.createMany({
		data: await Promise.all(studentIds.map(async ({ userId, orgId }) => ({
			id: userId,
			email: `${userId}@student.com`,
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			role: Role.STUDENT,
			orgId,
			...chance.weighted([{ pfp: pickAvatar() }, {}], [0.9, 0.1]),
			...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
		})))
	});

	// Batch create project editors
	const editorIds = [
		...allIds.flat().map((id) => id.teacherIds).flat(),
		...allIds.flat().map((id) => id.studentIds).flat()
	];
	await prisma.projectUser.createMany({
		data: editorIds.map(({ projectUserId, userId, projectId }) => ({
			id: projectUserId,
			userId,
			projectId,
			permission: ProjectUserPermission.EDITOR
		}))
	});

	// Batch create unverified students
	const unverifiedStudentIds = allIds.flat().map((id) => id.unverifieduserIds).flat();
	await prisma.user.createMany({
		data: await Promise.all(unverifiedStudentIds.map(async ({ userId, orgId }) => ({
			id: userId,
			email: `${userId}@unverified.com`,
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			role: Role.STUDENT,
			orgId,
			...chance.weighted([{ pfp: pickAvatar() }, {}], [0.9, 0.1]),
			...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
		})))
	});

	// Batch create project viewers
	const viewerIds = allIds.flat().map((id) => id.unverifieduserIds).flat();
	await prisma.projectUser.createMany({
		data: viewerIds.map(({ projectUserId, userId, projectId }) => ({
			id: projectUserId,
			userId,
			projectId,
			permission: ProjectUserPermission.VIEWER
		}))
	});

	// Batch create tasks
	const taskIds = allIds.flat().map((id) => id.taskIds).flat();
	await prisma.toDoItem.createMany({
		data: taskIds.map(({ id, projectId }) => ({
			id,
			name: faker.company.buzzPhrase(),
			checked: chance.weighted([true, false], [1, 2]),
			projectId
		}))
	});

	// Batch create task assignees
	await prisma.toDoAssignee.createMany({
		data: taskIds.flatMap(({ id, assigneeIds }) => assigneeIds.map((assigneeId) => ({
			toDoItemId: id,
			userId: assigneeId.projectUserId
		})))
	});

	console.log('Projects seeded!');
}
