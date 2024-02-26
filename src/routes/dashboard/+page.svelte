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
				{#each [...data.user.projectUser.map((user) => user.project)] as project}
					<a class="project" href="/dashboard/projects/{project.id}">
						<p>{project.name}</p>
					</a>
				{/each}
			</div>
		</div>
		<div class="right">
			<h2>To Do</h2>
			<div class="items">
				{#each data.assignees as assignee}
					<a class="toDoItem" href="/dashboard/projects/{assignee.toDoItem.projectId}">
						<h3>{assignee.toDoItem.name}</h3>
					</a>
				{/each}
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	main {
		margin: 1rem;
	}

	.projects {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.project {
		all: unset;
		height: 180px;
		min-width: 300px;
		background: $background-alt;
		border-radius: 10px;
		padding: 25px;
		box-sizing: border-box;
		cursor: pointer;
		margin: 10px;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;

		&:hover {
			background: $background2;
		}
		h3 {
			all: unset;
			font-size: 1.25rem;
		}
	}

	.project:hover {
		background-color: #e0e0e0;
	}

	.project:active {
		background-color: #d0d0d0;
	}

	.wrap {
		display: flex;
		flex-direction: row;
	}

	.left {
		width: 100%;
	}

	.right {
		width: 100%;
		max-width: 500px;
		padding: 10px;
		box-sizing: border-box;
		text-align: center;
		display: flex;
		flex-direction: column;
	}

	.items {
		width: 100%;
	}

	.toDoItem {
		all: unset;
		display: block;
		cursor: pointer;
		width: 100%;
		background: $background-alt;
		padding: 15px;
		border-radius: 5px;
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
