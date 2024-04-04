export const sizes = ['', ' KB', ' MB', ' GB', ' TB'];

export const getFormattedSize = (size: number) => {
	let sizer = size;
	let suffixIndex = 0;

	while (sizer >= 1000) {
		sizer = sizer / 1000;
		suffixIndex++;

		if (!sizes[suffixIndex]) {
			return 'Unknown';
		}
	}

	const shortenedString = (Math.floor(sizer * 1000) / 1000).toString().substring(0, 5)

	return shortenedString + sizes[suffixIndex];
};
