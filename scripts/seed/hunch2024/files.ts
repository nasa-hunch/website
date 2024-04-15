import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { githubURL } from './url';

export async function getFileInfo(): Promise<(readonly [string, number, string])[]> {
	const currentDirectory = fileURLToPath(new URL('.', import.meta.url));
	const files = await fs
		.readdir(path.normalize(path.join(currentDirectory, 'assets/files')))
		// [name: string, size: number, link: string][
		.then((files) =>
			Promise.all(
				files.map(async (file) => {
					const fileName = path.basename(file);
					const filePath = path.normalize(path.join(currentDirectory, 'assets/files', file));
					return [
						fileName,
						await fs.stat(filePath).then((stat) => stat.size),
						`${githubURL}/files/${fileName}`
					] as const;
				})
			)
		);

	return files;
}
