<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<h1>{data.project?.name}</h1>
</main>

<style>
	main {
		margin: 1rem;
	}
</style>
