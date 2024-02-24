<script lang="ts">
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/lexend';
	import '../app.css';

	
	import { Toaster } from 'svelte-french-toast';
	import { pwaInfo } from 'virtual:pwa-info';
	

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';
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
</style>
