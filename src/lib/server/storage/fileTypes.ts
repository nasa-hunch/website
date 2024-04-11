export const enum destinations {
	PROJECT,
	TEMPLATE
}

export interface FileDestination {
	destinationName: destinations;
	destinationId: number | string;
}
