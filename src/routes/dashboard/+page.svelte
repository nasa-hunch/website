<script lang="ts">
	import { Role } from '$lib/enums';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<p>Welcome, {data.user.firstName} {data.user.lastName}!</p>
	{#if data.user.role != Role.HUNCH_ADMIN}
		<h1>Projects</h1>
		{#each [...data.user.projectUser.map((user) => user.project), ...data.user.ownedProjects] as project}
			<a class="project" href="/dashboard/projects/{project.id}">
				<p>{project.name}</p>
			</a>
		{/each}
	{/if}
</main>

<style lang="scss">
	main {
		margin: 1rem;
	}

	.project {
		margin: 1rem;
		padding: 1rem;
		border: 1px solid black;
		border-radius: 0.5rem;
		text-align: center;
		background-color: #f0f0f0;
		display: block;
	}

	.project:hover {
		background-color: #e0e0e0;
	}

	.project:active {
		background-color: #d0d0d0;
	}
</style>
