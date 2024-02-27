<script lang="ts">
	import { onMount } from 'svelte';

	export let user: {
		pfp: string | null;
		firstName: string;
		lastName: string;
	};

	export let size = '24px';
	export let marginRight = '10px';

	let image: HTMLImageElement;

	let imageSrc = user.pfp;

	const tryPfp = async () => {
		if (user.pfp) {
			try {
				const fetchTest = await fetch(new URL(user.pfp));

				if (fetchTest.status != 200) {
					imageSrc = '/defaultUser.svg';
				}
			} catch (e) {
				imageSrc = '/defaultUser.svg';
			}
		} else {
			imageSrc = '/defaultUser.svg';
		}
	};
	onMount(() => {
		tryPfp();
	});
</script>

<img
	style="width: {size}; max-height: {size}; max-width: {size}; height: {size}; margin-right: {marginRight}"
	alt="{user.firstName} {user.lastName}"
	src={imageSrc}
/>

<style lang="scss">
	img {
		border-radius: 100%;
		aspect-ratio: 1/1;
		background: $background;
		object-fit: cover;
	}
</style>
