import type { ComponentType } from 'svelte';

import IconFile from '~icons/mdi/file';
import IconImage from '~icons/mdi/image';

const extensionIcons: { [key: string]: ComponentType } = {
	png: IconImage,
	jpg: IconImage
};

export const extensionSupport = (file: string) => {
	const fileParts = file.split('.');
	const ext = fileParts[fileParts.length - 1].toLowerCase();

	return extensionIcons[ext] || (IconFile as ComponentType);
};
