<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ModelForm from '$lib/components/ModalForm.svelte';
	import TextButton from '$lib/components/TextButton.svelte';
	export let data;
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import ComboBox from '$lib/components/Combobox.svelte';
	import { Role } from '$lib/enums';
</script>

{#if $page.state.modal === 'creatingProject'}
	<Modal on:close={() => history.back()}>
		<ModelForm action="?/createProject" method="post">
			<h2>Creating Project</h2>
			<ComboBox
				name="projectId"
				label="Project"
				options={[data.possibleProjects, (project) => project.id, (project) => project.name]}
			/>
			<hr class="spacer" />
			<Button value="Create" />
		</ModelForm>
	</Modal>
{/if}

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
			<p>Hmmm, looks like nothing is here yet.</p>
		{:else}
			<p>Not what you are looking for?</p>
		{/if}
		{#if data.user.role == Role.TEACHER || data.user.role == Role.SCHOOL_ADMIN}
			<TextButton
				on:click={() => {
					pushState('', {
						modal: 'creatingProject'
					});
				}}>Create a new project?</TextButton
			>
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
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}

	.project {
		all: unset;
		height: 180px;
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
