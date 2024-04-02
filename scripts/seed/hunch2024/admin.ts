import { Role } from '@prisma/client';

import { makePassword } from '../../../src/lib/server/password';
import { PrismaTransactionClient } from './returnType';

export async function seed(prisma: PrismaTransactionClient) {
	console.log('Adding NASA HUNCH Admin user...');
	await prisma.user.upsert({
		where: { email: 'admin@nasa.fake' },
		update: {},
		create: {
			email: 'admin@nasa.fake',
			firstName: 'Admin',
			lastName: 'NASA',
			role: Role.HUNCH_ADMIN,
			...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
		}
	});
	console.log('Added NASA HUNCH Admin user!');
}
