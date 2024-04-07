<script lang="ts">
	import Fuse from 'fuse.js';

	let searchInput = '';

	export let data;

	const fuse = new Fuse(data.projects, {
		keys: ['organization.name', 'users.user.firstName', 'users.user.lastName']
	});

	$: filteredProjects = searchInput
		? fuse.search(searchInput).map((result) => result.item)
		: data.projects;
</script>

<main>
	<input placeholder="Search..." type="text" bind:value={searchInput} />
	<div class="projects">
		{#each filteredProjects as project}
			<a class="project" href="/dashboard/projects/{project.id}">
				<div class="content">
					<h1>{project.organization.name}</h1>
					<p>
						{project.users.map((user) => `${user.user.firstName} ${user.user.lastName}`).join(', ')}
					</p>
				</div>
			</a>
		{/each}
	</div>
</main>

<style lang="scss">
	main {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 1.5rem 0px;
	}

	input {
		width: 100%;
		padding: 0.5rem;
		margin-bottom: 1rem;
		border: 1px solid var(--background-alt);
		border-radius: 0.5rem;
	}

	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
		width: 100%;
	}

	.project {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		border-radius: 0.5rem;
		background-color: $background-alt;
		color: black;
		text-decoration: none;
		transition: background-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

		.content {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		&:hover {
			background-color: darken($background-alt, 5%);
		}
	}
</style>
