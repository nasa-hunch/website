<script lang="ts">
	import sanitizeHtml from 'sanitize-html';

	export let program: string;

	export let projectTemplates: {
		id: string;
		name: string;
		description: string;
		shortDescription: string;
	}[] = [];
</script>

<div class="wrap">
	<div class="inner">
		<header>
			<div class="reach" />
			<div class="description">
				<h1>{program}</h1>
				<h2><slot name="subtitle" /></h2>
			</div>
		</header>

		<div class="content">
			<div class="mainWrap">
				<main>
					<slot name="main" />
				</main>
			</div>
			<div class="projects">
				<h2>Projects</h2>
				{#if projectTemplates.length > 0}
					{#each projectTemplates as project}
						<a class="project" href="/projects/{project.id}">
							<h3>{project.name}</h3>
							<p>{@html sanitizeHtml(project.shortDescription)}</p>
						</a>
					{/each}
				{:else}
					<p><i>No projects yet!</i></p>
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1rem;
	}

	.inner {
		width: 90%;
	}

	.content {
		display: flex;
		flex-direction: row;
		align-items: start;
		justify-content: center;
		flex-wrap: wrap;
	}

	.projects {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		width: 100%;
		margin: 0px 25px;
		padding: 0px 25px;
		box-sizing: border-box;
		border-radius: 5px;
		max-width: 350px;
		background: $background-alt;

		.project {
			all: unset;
			cursor: pointer;
			width: 100%;
			padding: 15px 10px;
			margin-bottom: 20px;
			box-sizing: border-box;
			background: $background2;
			border-radius: 5px;
			transition: background 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

			h3 {
				margin: 0px;
			}

			p {
				margin: 0px;
				opacity: 0.9;
				font-size: 0.95rem;
			}

			&:hover {
				background: $background3;
			}
		}
	}

	.mainWrap {
		display: flex;
		justify-content: center;

		main {
			max-width: 800px;
			flex-grow: 1;
		}
	}

	.description {
		h1 {
			font-size: 4rem;
			font-weight: 700;
			margin-bottom: 1rem;
			text-align: center;
		}

		h2 {
			font-size: 3rem;
			font-weight: 700;
			margin-bottom: 1rem;
			text-align: center;
		}
	}
</style>
