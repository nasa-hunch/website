import { pbkdf2, randomBytes } from 'node:crypto';
import { promisify } from 'node:util';
const pkdf2 = promisify(pbkdf2);

export interface PasswordData {
	hash: string;
	salt: string;
}

export async function makePassword(password: string): Promise<PasswordData> {
	const salt = randomBytes(32).toString('hex');
	const hash = (await pkdf2(password, salt, 1000, 100, 'sha512')).toString('hex');

	return {
		hash,
		salt
	};
}

export async function checkPassword(
	hash: string,
	salt: string,
	password: string
): Promise<boolean> {
	const newHash = (await pkdf2(password, salt, 1000, 100, 'sha512')).toString('hex');

	return newHash === hash;
}
