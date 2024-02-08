<script lang="ts">
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/lexend';
	import '../app.css';

	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';

	onMount(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});
</script>

<slot />

<style>
	:global(body) {
		margin: 0px;
	}
</style>
