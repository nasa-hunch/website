<script lang="ts">
	import ModelHelper from '$lib/components/ModelHelper.svelte';
	import ModelForm from "$lib/components/ModelForm.svelte"
	import TextButton from '$lib/components/TextButton.svelte';
	import Button from "$lib/components/Button.svelte"
	export let data;
	import ComboBox from "$lib/components/Combobox.svelte"
	import { Role } from '$lib/enums';
	let creatingProject = false;

	let selectedCategory: number;
	

</script>

<ModelHelper bind:visible={creatingProject}>
	<ModelForm method="post" action="?/createProject">
			<h2>Creating Project</h2>
			<ComboBox options={[data.possibleProjects, (project) => project.id, (project) => project.name]} label="Project" name="projectId"/>
			<hr class="spacer"/>
			<Button value="Create"/>
	</ModelForm>
	
</ModelHelper>

<main>
	<h1>Projects</h1>
	<div class="projects">
		
		{#each data.user.projectUser as projectUser}
			<a class="project" href="/dashboard/projects/{projectUser.project.id}">
				<h3>{projectUser.project.name}</h3>
			</a>
		{/each}
	</div>
	
	<div class="createNewPrompt">
		{#if data.user.projectUser.length < 1}
			<p>Hmmm, looks like nothing is here yet. </p>
		{:else}
			<p>Not what you are looking for? </p>
		{/if}
		{#if data.user.role == Role.TEACHER || data.user.role == Role.SCHOOL_ADMIN}
		<TextButton on:click={() => {creatingProject = true}}>Create a new project?</TextButton>
		{/if}
	</div>
</main>

<style lang="scss">
	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
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

	.projects {
		display: grid;
		width: 90%;
		gap: 10px;
		grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
		
	}

	.project {
		all: unset;
		aspect-ratio: 3/2;
		background: $background2;
		border-radius: 10px;
		padding: 25px;
		box-sizing: border-box;
		cursor: pointer;
		
		&:hover {
			background: $background3;
		}
		h3 {
			all: unset;
			font-size: 1.25rem;
		}
	}
</style>
