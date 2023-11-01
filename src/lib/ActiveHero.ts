import { writable } from 'svelte/store';

type ActiveHero = {
	title: string;
	image: string;
	disabled?: boolean;
};

export const activeHero = writable<ActiveHero>({
	title: 'Make For Nasa',
	image: 'https://www.nasa.gov/wp-content/uploads/2023/08/wff-2023-068-004.jpg'
});
