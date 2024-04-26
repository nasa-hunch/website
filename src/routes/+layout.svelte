<script lang="ts">
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/lexend';
	import '../app.css';

	import { onMount } from 'svelte';
	import { Toaster } from '@leodog896/svelte-french-toast';
	import { pwaInfo } from 'virtual:pwa-info';

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';

	onMount(() => {
		document.body.classList.add('started');
	});
</script>

<svelte:head>
	<meta content="/og-img.webp" property="og:image" />
	{@html webManifest}
</svelte:head>
<div class="toasts">
	<Toaster />
</div>

<div class="body">
	<slot />
</div>

<style lang="scss">
	:global(body) {
		margin: 0px;

		--bgColor: #f1f1f1;
		--green: #158547;
		--background-alt: #e6e6e6;
	}

	:global(*) {
		box-sizing: border-box;
	}
</style>
