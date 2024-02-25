<script lang="ts">
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/lexend';
	import '../app.css';

	import { onMount } from 'svelte';
	import { Toaster } from 'svelte-french-toast';
	import { pwaInfo } from 'virtual:pwa-info';

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';

	onMount(() => {
		document.body.classList.add('started');
	});
</script>

<svelte:head>
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

		--green: #158547;
	}

	:global(*) {
		box-sizing: border-box;
	}
</style>
