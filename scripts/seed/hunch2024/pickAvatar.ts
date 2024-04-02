import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { Chance } from "chance";

import { githubURL } from './url';

const chance = new Chance();

const currentPath = fileURLToPath(new URL('.', import.meta.url));
const avatars = fs.readdirSync(path.join(currentPath, 'assets/avatar'));

export function pickAvatar() {
    const filePath = chance.pickone(avatars);
    const fileName = path.basename(filePath);

    return `${githubURL}avatar/${fileName}`;
}
