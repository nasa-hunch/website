<script lang="ts">
	import '@fontsource-variable/manrope';
	import '@fontsource-variable/lexend';

	import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar />

<div class="content">
	<slot />
</div>

<style lang="scss">
	:global(body) {
		margin: 0px;
	}
</style>
