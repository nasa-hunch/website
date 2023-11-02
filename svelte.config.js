import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: process.env.NODE_ENV != 'development'
		}
	}
};

export default config;
