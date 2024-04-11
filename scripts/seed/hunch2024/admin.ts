import { createId } from '@paralleldrive/cuid2';
import { Role } from '@prisma/client';

import { makePassword } from '../../../src/lib/server/password';
import { pickAvatar } from './pickAvatar';
import { PrismaTransactionClient } from './returnType';

export async function seed(prisma: PrismaTransactionClient) {
	console.log('Adding NASA HUNCH Admin user...');
	await prisma.user.upsert({
		where: { email: 'admin@nasa.fake' },
		update: {},
		create: {
			id: createId(),
			email: 'admin@nasa.fake',
			firstName: 'Admin',
			lastName: 'NASA',
			role: Role.HUNCH_ADMIN,
			pfp: pickAvatar(),
			...(await makePassword('password' + process.env.PASSWORD_SUFFIX || ''))
		}
	});
	console.log('Added NASA HUNCH Admin user!');
}
