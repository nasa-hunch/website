/* 
The goal of this is to seed the database in such a way that it mirrors the actual use case to measure performance and QOL features. 

*/

import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import { Role } from '@prisma/client';
import crypto from 'crypto';
import { promisify } from 'util';

const pkdf2 = promisify(crypto.pbkdf2);

interface PasswordData {
	hash: string;
	salt: string;
}

const startTime = Date.now();
let recentStartTime = Date.now();
console.log('Starting Realistic Seed, this may take a moment.');

async function makePassword(password: string): Promise<PasswordData> {
	const salt = crypto.randomBytes(32).toString('hex');
	const hash = (await pkdf2(password, salt, 1000, 100, 'sha512')).toString('hex');

	return { hash, salt };
}

const prisma = new PrismaClient();

const orgs: {
	name: string;
}[] = [];

const users: {
	firstName: string;
	lastName: string;
	email: string;
	hash: string;
	salt: string;
	role: Role | null;
	orgId: number | null;
}[] = [];

//250 orgs
for (let i = 0; i < 250; i++) {
	orgs.push({
		name: `${faker.word.adjective()}-${faker.word.noun()}`
	});
}

console.log(`Orgs generated in ${Date.now() - recentStartTime}ms`);
recentStartTime = Date.now();

//2,500 users
for (let i = 0; i < 2500; i++) {
	const firstName = faker.person.firstName();
	const lastName = faker.person.lastName();
	users.push({
		firstName: firstName,
		lastName: lastName,
		email: faker.internet.email({ firstName, lastName }),
		role: Role[Object.keys(Role)[Math.floor(Math.random() * Object.keys(Role).length)]],
		orgId: Math.ceil(Math.random() * 250),
		...(await makePassword('password'))
	});
}

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
