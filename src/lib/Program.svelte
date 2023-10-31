<script lang="ts">
	export let program: string;
	import ActiveHero from '$lib/ActiveHero';
	$ActiveHero.title = program;
</script>

<div class="reach" />
<div class="description">
	<h2>NASA Hunch {program} Program</h2>
</div>
<div class="projects">
	<!--
	{#each projects as project}
		<Project {project} />
	{/each}-->
</div>
