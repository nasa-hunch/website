<script lang="ts">
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/lexend';

	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';

	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import toast from '@leodog896/svelte-french-toast';
	import DemoAccount from './DemoAccount.svelte';

	onMount(() => {
		const lenis = new Lenis();

		toast(DemoAccount, {
			position: "bottom-right",
			duration: 20_000
		})

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	});
</script>

<Navbar />

<div class="content">
	<slot />
</div>
<Footer />

<style lang="scss">
	:global(body) {
		margin: 0px;
	}

	.content {
		min-height: calc(100vh - 100px - 75px);
	}
</style>
