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
<footer>
	<div>
		<img src="/favicon.png" alt="NASA Hunch Logo" />
	</div>
	<div>
		&copy; 2024 All Rights Reserved.
	</div>
	<div>
		<div class="links">
			<div class="link"><a href="/">T</a></div>
			<div class="link"><a href="/">F</a></div>
			<div class="link"><a href="/">Y</a></div>
		</div>
	</div>
</footer>
<style lang="scss">
    :global(body) {
        margin: 0px;
    }

    :global(*) {
        box-sizing: border-box;
    }

    footer {
        padding: 1rem 3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

		.links {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			width: 100%;

			.link {
				margin: 0px 0.5rem;
			}
		}
    }

    .copyright-container {
        width: 100%;
        text-align: center;
    }
</style>
