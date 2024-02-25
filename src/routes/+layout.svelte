<script lang="ts">
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/lexend';
	import '../app.css';

	import { Toaster } from 'svelte-french-toast';
	import { pwaInfo } from 'virtual:pwa-info';
	import Footer from '$lib/components/Footer.svelte';


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
    }

    :global(*) {
        box-sizing: border-box;
    }

    
</style>
