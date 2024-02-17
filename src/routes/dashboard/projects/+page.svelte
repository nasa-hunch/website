<script lang="ts">
	import TextButton from '$lib/components/TextButton.svelte';
	import type { PageData } from '../$types';
	export let data: PageData;
</script>

<main>
	{#each data.user.projectUser as projectUser}
		<a class="project" href="/dashboard/projects/{projectUser.project.id}">
			<p>{projectUser.project.name}</p>
		</a>
	{/each}
	<div class="createNewPrompt">
		{#if data.user.projectUser.length < 1}
			<p>Hmmm, looks like nothing is here yet. </p>
		{:else}
			<p>Not what you are looking for? </p>
		{/if}
		<TextButton>Create a new project?</TextButton>
	</div>
</main>

<style lang="scss">
	main {
		width: 100%;
		display: flex;
		align-items: start;
		justify-content: center;
	}
	.createNewPrompt {
		display: flex;
		align-items: center;
		justify-content: center;

		

		
	}
</style>
