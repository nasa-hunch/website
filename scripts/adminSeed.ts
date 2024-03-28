/* 
	Seeds the database to mirror actual usage to measure performance, QOL features,
	and provide mock data for the dashboard. This script is not intended to be run 
	in production, and is only for development purposes.
*/

import { faker } from '@faker-js/faker';
import { type Prisma,PrismaClient, Role } from '@prisma/client';
import crypto from 'crypto';
import { promisify } from 'util';

const pkdf2 = promisify(crypto.pbkdf2);

interface PasswordData {
	hash: string;
	salt: string;
}

const prisma = new PrismaClient();

// If there are more than 100 orgs, the seed will fail
if (await prisma.organization.count() > 100) {
	throw new Error('There are already more than 100 organizations in the database. Aborting seed.');
}

const startTime = Date.now();
let recentStartTime = Date.now();
console.log('Starting Realistic Seed, this may take a moment.');

async function makePassword(password: string): Promise<PasswordData> {
	const salt = crypto.randomBytes(32).toString('hex');
	const hash = (await pkdf2(password, salt, 1000, 100, 'sha512')).toString('hex');

	return { hash, salt };
}

const orgs: Prisma.OrganizationCreateManyInput[] = [];

// 250 orgs
for (let i = 0; i < 250; i++) {
	orgs.push({
		name: `${faker.word.adjective()}-${faker.word.noun()}`
	});
}

console.log(`Orgs generated in ${Date.now() - recentStartTime}ms`);
recentStartTime = Date.now();

// 2500 users
const users: Prisma.UserCreateManyInput[] = await Promise.all(Array.from({ length: 2500 }, async () => {
	const firstName = faker.person.firstName();
	const lastName = faker.person.lastName();
	const email = faker.internet.email({ firstName, lastName });
	return {
		firstName,
		lastName,
		email,
		role: Role[Object.keys(Role)[Math.floor(Math.random() * Object.keys(Role).length)]],
		orgId: Math.ceil(Math.random() * 250),
		...(await makePassword('password'))
	};
}));

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
