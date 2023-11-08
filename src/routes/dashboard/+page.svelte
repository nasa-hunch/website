<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<main>
	<p>Welcome, {data.user.firstName} {data.user.lastName}!</p>
	<h1>Projects</h1>
	{#each data.user.projectUser as { project }}
		<div class="project">
			<p>{project.name}</p>
		</div>
	{/each}
</main>

<style>
	main {
		margin: 1rem;
	}
</style>
