<script lang="ts">
	import type { PageData } from './$types';
	import Sidebar from './Sidebar.svelte';

	export let data: PageData;
</script>

<div class="wrap">
	<Sidebar {data} />
	<div class="content">
		<slot />
	</div>
	
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		height: 100vh;
		display: flex;
		overflow: auto;
		background: $background;
	}
	.content {
		width: 100%;
		height: 100%;
		overflow-y: auto;
	}
</style>
