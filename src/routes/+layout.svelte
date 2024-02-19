<script lang="ts">
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/lexend';
	import '../app.css';

	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';
	import { addToast, resetToasts } from '$lib/toasts/toaster';
	import { pwaInfo } from 'virtual:pwa-info';
	import Toaster from '$lib/toasts/Toaster.svelte';

	onMount(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});

	
	resetToasts()
		onMount(() => {
			addToast({
			message: "NOT OFFICIAL WEBSITE",
			type: "warn",
			life: 3000
		})
	})
	
	
	
	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';
</script>

<svelte:head>
	{@html webManifest}
</svelte:head>


<Toaster/>
<slot />

<style lang="scss">
	:global(body) {
		margin: 0px;
	}
</style>
