<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/lexend';
</script>

<Navbar />

<div class="content">
	<slot />
</div>

<style>
	:global(body) {
		margin: 0px;
	}
</style>
