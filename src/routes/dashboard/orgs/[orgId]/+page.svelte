<script lang="ts">
	import { snakeCaseToTitleCase } from '$lib/case.js';
	import Pfp from '$lib/components/Pfp.svelte';
	export let data;
</script>

<main>
	<h1>{data.org.name}</h1>

	<h2>Projects</h2>
	<div class="projects">
		{#each data.org.projects as project}
			<a class="project" href="/dashboard/projects/{project.id}">
				<h2>{project.projectTemplate.name}</h2>
				<p>
					{project.users.map(({ user }) => `${user.firstName} ${user.lastName}`).join(', ')}
				</p>
			</a>
		{/each}
	</div>

	<h2>Users</h2>

	<div class="users">
		{#each data.org.users as user}
			<a class="user" href="/dashboard/users/{user.id}">
				<Pfp size="50px" {user} />
				<div class="content">
					<p>{user.firstName} {user.lastName}</p>
					{#if user.role && user.role !== 'STUDENT'}
						<p class="role">{snakeCaseToTitleCase(user.role)}</p>
					{/if}
				</div>
			</a>
		{/each}
	</div>
</main>

<style lang="scss">
	main {
		margin: 1rem;
	}

	.users {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}

	.role {
		display: inline-block;
		padding: 0.25rem 0.5rem;
		margin: 0;
		font-size: 0.8rem;
		color: var(--text-alt);
		background-color: rgba(221, 54, 28, 0.25);
		border: 1px solid #dd361c;
	}

	.user, .project {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		border-radius: 0.5rem;
		background-color: $background-alt;
		color: black;
		transition: 0.2s all cubic-bezier(0.075, 0.82, 0.165, 1);

		&:hover {
			background-color: $background2;
		}
	}

	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}

	.project {
		flex-direction: column;
		justify-content: space-between;
		align-items: start;
		text-decoration: underline;
	}
</style>
