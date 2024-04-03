<script lang="ts">
	export let data;
</script>

<main>
	<div class="projects">
		{#each data.projects as project}
			<a class="project" href="/dashboard/projects/{project.id}">
				<div class="content">
					<h1>{project.organization.name}</h1>
					<p>
						{project.users
							.map(user => `${user.user.firstName} ${user.user.lastName}`)
							.join(', ')
						}
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
		padding: 1.5rem 0px;
	}

	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}

	.project {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		border-radius: 0.5rem;
		background-color: var(--background-alt);
		color: black;
		text-decoration: none;

		.content {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
	}
</style>
