<script lang="ts">
	import { onMount } from 'svelte';

	export let user: {
		pfp: string | null;
		firstName: string;
		lastName: string;
	};

	export let size = '24px';
	export let marginRight = '10px';

	let imageSrc = user.pfp ?? '/defaultUser.svg';
</script>

<img
	style="width: {size}; max-height: {size}; max-width: {size}; height: {size}; margin-right: {marginRight}"
	alt="{user.firstName} {user.lastName}"
	src={imageSrc}
	on:error|once={() => (imageSrc = '/defaultUser.svg')}
/>

<style lang="scss">
	img {
		border-radius: 100%;
		aspect-ratio: 1/1;
		background: $background;
		object-fit: cover;
	}
</style>
