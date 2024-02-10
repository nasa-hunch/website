<script lang="ts">
	import type { PageData } from './$types';
	import Sidebar from './Sidebar.svelte';

	export let data: PageData;
</script>

<div class="wrap">
	<Sidebar {data} />
	<slot />
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		height: 100vh;
		display: flex;
		overflow: auto;
		background: $background;
	}
</style>
