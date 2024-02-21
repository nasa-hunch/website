<script lang="ts">
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/lexend';
	import '../app.css';

	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';
	import { pwaInfo } from 'virtual:pwa-info';

	import toast, { Toaster } from "svelte-french-toast"

	onMount(() => {

		toast('unofficial website.')

		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	});

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';
</script>

<svelte:head>
	{@html webManifest}
</svelte:head>
<div class="toasts">
	<Toaster />
</div>

<slot />

<style lang="scss">
	:global(body) {
		margin: 0px;
	}
</style>
