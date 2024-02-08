<script lang="ts">
	export let program: string;
</script>

<header>
	<div class="reach" />
	<div class="description">
		<h1>{program}</h1>
		<h2><slot name="subtitle" /></h2>
	</div>
</header>

<div class="projects">
	<!--
	{#each projects as project}
		<Project {project} />
	{/each}-->
</div>

<style lang="scss">
	.description {
		margin: 1rem;

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
