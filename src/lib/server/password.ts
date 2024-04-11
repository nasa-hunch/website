import { pbkdf2, randomBytes } from 'node:crypto';
import { promisify } from 'node:util';
import speakeasy from "speakeasy";

const pkdf2 = promisify(pbkdf2);

export interface PasswordData {
	hash: string;
	salt: string;
	secret: string;
}

export async function makePassword(password: string): Promise<PasswordData> {
	const salt = randomBytes(32).toString('hex');
	const hash = (await pkdf2(password, salt, 1000, 100, 'sha512')).toString('hex');
	const secret = speakeasy.generateSecret().base32;
	return {
		hash,
		salt,
		secret
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

export function verifyToken(token: string, secret: string) 
{
	return speakeasy.totp.verify({
		secret: secret,
		encoding: 'base32',
		window: 5,
		token: token
	});
}