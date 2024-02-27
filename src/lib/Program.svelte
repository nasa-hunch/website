<script lang="ts">
	export let program: string;

	export let projectTemplates: {
		id: number,
		name: string
		description: string
	}[] = []

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
				{#each projectTemplates as project}
					<a href="/projects/{project.id}" class="project">
						<h3>{project.name}</h3>
						<p>{project.description}</p>
					</a>
				{/each}
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
