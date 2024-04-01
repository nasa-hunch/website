/* 
	This script is not intended to be run 
	in production, and is only for development purposes.

	Seeds the database to mirror actual usage to measure performance, QOL features,
	and provide mock data for the dashboard. Makes a bunch of fake users and organizations.
*/

import { faker } from '@faker-js/faker';
import { type Prisma, PrismaClient, Role } from '@prisma/client';

import { makePassword } from '../../src/lib/server/password';

const prisma = new PrismaClient();

async function main() {
	// If there are more than 100 orgs, the seed will fail
	if ((await prisma.organization.count()) > 100) {
		throw new Error(
			'There are already more than 100 organizations in the database. Aborting seed.'
		);
	}

	const startTime = Date.now();
	let recentStartTime = Date.now();
	console.log('Starting Realistic Seed, this may take a moment.');

	const orgs: Prisma.OrganizationCreateManyInput[] = [];

	// 250 orgs
	for (let i = 0; i < 250; i++) {
		orgs.push({
			name: generateOrgName()
		});
	}

	console.log(`Orgs generated in ${Date.now() - recentStartTime}ms`);
	recentStartTime = Date.now();

	const emails: string[] = [];

	// 2500 users
	const users: Prisma.UserCreateManyInput[] = await Promise.all(
		Array.from({ length: 2500 }, async () => {
			let firstName: string;
			let lastName: string;
			let email: string;
			do {
				firstName = faker.person.firstName();
				lastName = faker.person.lastName();
				email = faker.internet.email({ firstName, lastName });
			} while (emails.includes(email));
			return {
				firstName,
				lastName,
				email,
				role: Role[Object.keys(Role)[Math.floor(Math.random() * Object.keys(Role).length)]],
				orgId: Math.ceil(Math.random() * 250),
				...(await makePassword('password'))
			};
		})
	);

	console.log(`Users generated in ${Date.now() - recentStartTime}ms`);
	recentStartTime = Date.now();

	await prisma.organization.createMany({
		data: orgs
	});

	console.log(`Orgs seeded in ${Date.now() - recentStartTime}ms`);
	recentStartTime = Date.now();

	await prisma.user.createMany({
		data: users
	});

	console.log(`Users seeded in ${Date.now() - recentStartTime}ms`);
	recentStartTime = Date.now();
	console.log(`All done! Completed in ${Date.now() - startTime}ms`);
}

function generateOrgName() {
	const school = Math.random() > 0.5 ? 'High School' : Math.random() > 0.5 ? 'College' : 'Academy';
	let name;
	if (Math.random() > 0.75) {
		name = faker.company.name();
		return name;
	} else if (Math.random() > 0.5) {
		name = faker.location.city();
	} else if (Math.random() > 0.25) {
		name = faker.person.fullName();
	} else {
		name = faker.word.noun();
	}
	name = name.charAt(0).toUpperCase() + name.slice(1);
	name += ` ${school}`;
	return name;
}

main()
	.catch((e) => {
		console.error(e);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
