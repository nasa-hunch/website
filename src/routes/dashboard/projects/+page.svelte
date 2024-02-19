<script lang="ts">
	import ModelHelper from '$lib/components/ModelHelper.svelte';
	import ModelForm from "$lib/components/ModelForm.svelte"
	import TextButton from '$lib/components/TextButton.svelte';
	export let data;
	import ComboBox from "$lib/components/Combobox.svelte"
	let creatingProject = false;

	let selectedCategory: number;

	let projectOptions = data.possibleProjects;
	console.log(projectOptions)

	$: if(selectedCategory) {
		projectOptions = data.possibleProjects.filter((item) => item.categoryId == selectedCategory)
	}
	

</script>

<ModelHelper bind:visible={creatingProject}>
	<ModelForm method="post" action="?/createProject">
		<div>
			<ComboBox options={[data.categories, (category) => category.id, (category) => category.name]} label="Project Category" bind:selected={selectedCategory}/>
			<hr class="spacer">
			{#if projectOptions && projectOptions.length > 0}
				<ComboBox options={[projectOptions, (project) => project.id, (project) => project.name]} label="Project"/>
			{/if}
		</div>
	</ModelForm>
	
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
	.spacer {
		background: transparent;
		border: 1px solid transparent;
	}
</style>
