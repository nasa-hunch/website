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

	import { pwaInfo } from 'virtual:pwa-info';
	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';
</script>

<svelte:head>
	{@html webManifest}
</svelte:head>

<slot />

<style lang="scss">
	:global(body) {
		margin: 0px;
	}
</style>
