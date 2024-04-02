<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<h2>Welcome back, {data.user.firstName} {data.user.lastName}!</h2>
	<div class="wrap">
		<div class="left">
			<h1>Projects</h1>
			<div class="projects">
				{#each data.user.projectUser as projectUser}
					<a class="project" class:submitted={projectUser.project.submitted} href="/dashboard/projects/{projectUser.project.id}">
						<h3>{projectUser.project.projectTemplate.name.substring(0, 25)}{projectUser.project.projectTemplate.name.length > 25 ? "..." : ""}</h3>
					</a>
				{/each}
			</div>
		</div>
		<div class="right">
			<div class="toDo">
				<h2>To Do</h2>
				<div class="items">
					{#if data.assignees.length < 1}
					<p>Nothing to do!</p>
					{/if}
					{#each data.assignees as assignee}
						<a class="toDoItem" href="/dashboard/projects/{assignee.toDoItem.projectId}">
							<h3>{assignee.toDoItem.name}</h3>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	main {
		margin: 0rem 1rem;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.projects {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.project {
		all: unset;
		height: 12rem;
		width: 20rem;
		max-width: 25rem;
		background: $background-alt;
		border-radius: 10px;
		padding: 25px;
		box-sizing: border-box;
		cursor: pointer;
		margin: 10px;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;

		h3 {
			width: 100%;
			text-wrap: nowrap;
			word-wrap: normal;
			overflow: hidden;
			margin: 0px;
			font-weight: 500;
		}
		&:hover {
			background: $background2;
		}
	}

	

	.wrap {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: start;
		justify-content: center;
	}

	.left {
		min-width: 20rem;
		width: calc(100% - 25rem);
		flex-grow: 1;
	}

	.right {
		
		width: 25rem;
		padding: 0.5rem;
		
		box-sizing: border-box;
		text-align: center;
		display: flex;
		flex-direction: column;
	}

	.items {
		width: 100%;
	}

	.toDo {
		background: $background;
		padding: 0.5rem;
		box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.1);
		border-radius: 0.2rem;
		height: 100%;
	}

	.toDoItem {
		all: unset;
		display: block;
		cursor: pointer;
		width: 100%;
		background: $background-alt;
		padding: 0.25rem 0.5rem;
		border-radius: 0.25rem;
		margin: 0.25rem 0rem;
		box-sizing: border-box;
		text-align: left;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;

		&:hover {
			background: $background2;
		}

		h3 {
			margin: 0px;
		}
	}

	h1 {
		text-align: center;
	}
</style>
