import { writable, type Writable } from 'svelte/store';

type ActiveHero = {
    title: string,
    image: string,
    disabled?: boolean;
}

const ActiveHero: Writable<ActiveHero> = writable({
    title: "Make For Nasa",
    image: "https://www.nasa.gov/wp-content/uploads/2023/08/wff-2023-068-004.jpg"
});

export default ActiveHero;