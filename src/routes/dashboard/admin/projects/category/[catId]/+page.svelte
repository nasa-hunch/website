<script lang="ts">
	import dayjs from 'dayjs';

	import Button from '$lib/components/Button.svelte';
	export let data;
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import Input from '$lib/components/Input.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ModelForm from '$lib/components/ModalForm.svelte';

	const calculatePercentDone = (startDay: Date, endDay: Date) => {
		const startTimestamp = dayjs(startDay).unix();
		const endTimestamp = dayjs(endDay).unix();
		const currentTimestamp = dayjs().unix();

		const totalTime = endTimestamp - startTimestamp;
		const currentTime = endTimestamp - currentTimestamp;

		const percent = (totalTime - currentTime) / totalTime;
		const maxPercent = Math.min(100, Math.max(percent, 0));

		return maxPercent;
	};

	let colorInput: HTMLInputElement;
</script>

{#if $page.state.modal === 'createProject'}
	<Modal on:close={() => history.back()}>
		<ModelForm action="?/createProject" method="post">
			<h2>Creating Project</h2>
			<Input name="name" bgColor="#f1f1f1" label="Name" />
			<Input name="desc" bgColor="#f1f1f1" label="Description" />
			<input name="deadline" type="date" />
			<Button value="create" />
		</ModelForm>
	</Modal>
{/if}

<div class="wrap">
	<header>
		<h1>
			<!-- TODO: actually get this to send to server -->
			<input bind:this={colorInput} hidden type="color" value={'#' + data.category.color} />
			<button
				style="background: #{data.category.color}"
				class="colorInput"
				on:click={() => colorInput.click()}
			/>
			<input placeholder="Category name" type="text" value={data.category.name} />
		</h1>
	</header>
	<div class="projectWrap">
		{#each data.category.projectTemplates as project}
			{@const percentDone = calculatePercentDone(project.createdAt, project.deadline)}
			<a class="project" href="/dashboard/admin/projects/{project.id}">
				<div class="projectTitle">
					{project.name}
				</div>

				<div style="color: rgba({(percentDone / 100) * 255}, 0, 0)" class="deadline">
					Deadline: {dayjs(project.deadline).format('MMM D, YYYY')}
				</div>
			</a>
		{/each}
		<Button
			type="button"
			value="New Project"
			on:click={() => {
				pushState('', {
					modal: 'createProject'
				});
			}}
		/>
	</div>
</div>

<style lang="scss">
	.colorInput {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-right: 10px;
		border: 2px solid black;

		&:hover {
			cursor: pointer;
		}
	}

	.wrap {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
	}
	header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: $background-alt;
	}
	.projectWrap {
		padding-top: 20px;
		display: flex;
		width: 90%;
		flex-direction: column;
	}
	.projectTitle {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: start;
		font-size: 1.2rem;
	}
	.project {
		all: unset;
		border-radius: 5px;
		width: 100%;
		background: $background-alt;
		height: 100%;
		box-sizing: border-box;
		padding: 10px 15px;
		display: flex;
		align-items: center;
		justify-content: start;
		margin-bottom: 15px;
		cursor: pointer;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;
	}
	.project:hover {
		background: $background2;
	}
	.deadline {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: end;
	}
	h1 {
		display: flex;
		align-items: center;
		justify-content: center;

		input[type='text'] {
			font-size: 1.5rem;
			margin-right: 10px;
			text-align: center;
		}
	}
	h2 {
		text-align: center;
	}
</style>
