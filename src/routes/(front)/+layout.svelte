<script lang="ts">
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/lexend';

	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';
	import toast from 'svelte-french-toast';

	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/Navbar.svelte';

	onMount(() => {
		toast('This is the unofficial website.');

		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
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
