export const enum destinations {
	PROJECT,
	TEMPLATE
}

export type FileDestination = {
	destinationName: destinations;
	destinationId: string;
};
