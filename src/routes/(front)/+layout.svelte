<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/lexend';
</script>

<Hero />
<Navbar />

<div class="content">
	<slot />
</div>

<style>
	:global(body) {
		margin: 0px;
	}
</style>
