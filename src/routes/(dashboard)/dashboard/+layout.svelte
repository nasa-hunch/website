<script>
	import Sidebar from '$lib/Sidebar.svelte';
</script>

<div class="wrap">
	<Sidebar />
	<slot />
</div>

<style>
	.wrap {
		width: 100%;
		height: 100vh;
		overflow: auto;
	}
</style>
