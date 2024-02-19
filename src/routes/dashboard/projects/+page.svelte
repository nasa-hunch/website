<script lang="ts">
	import ModelHelper from '$lib/components/ModelHelper.svelte';
	import TextButton from '$lib/components/TextButton.svelte';
	import type { PageData } from '../$types';
	export let data: PageData;
	import ComboBox from "$lib/components/Combobox.svelte"
	let creatingProject = false;

</script>

<ModelHelper bind:visible={creatingProject}>
	<form method="post" action="?/createProject">
		<div>
			<ComboBox options={[[], () => 1, () => ""]}/>
		</div>

	</form>
</ModelHelper>

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
		<TextButton on:click={() => {creatingProject = true}}>Create a new project?</TextButton>
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
