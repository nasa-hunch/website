<script lang="ts">
	import { Role } from '@prisma/client';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<p>Welcome, {data.user.firstName} {data.user.lastName}!</p>
	{#if data.user.role != Role.HUNCH_ADMIN}
		<h1>Projects</h1>
		{#each data.user.projectUser as { project }}
			<div class="project">
				<p>{project.name}</p>
			</div>
		{/each}
	{/if}
</main>

<style>
	main {
		margin: 1rem;
	}
</style>
