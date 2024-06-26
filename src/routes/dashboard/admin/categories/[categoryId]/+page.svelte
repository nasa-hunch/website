<script lang="ts">
	import dayjs from 'dayjs';

	import Button from '$lib/components/Button.svelte';
	export let data;
	import PencilIcon from '~icons/mdi/pencil-outline';
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import ColorCircle from '$lib/components/ColorCircle.svelte';
	import DatePicker from '$lib/components/DatePicker.svelte';
	import IconButton from '$lib/components/IconButton.svelte';
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
</script>

{#if $page.state.modal === 'createProject'}
	<Modal on:close={() => history.back()}>
		<ModelForm action="?/createProject" method="post">
			<h2>Creating Project</h2>
			<Input name="name" bgColor="#f1f1f1" label="Name" />
			<hr />
			<Input name="desc" bgColor="#f1f1f1" label="Description" />
			<hr />
			<DatePicker name="deadline" bgColor="#f1f1f1" label="Deadline" />
			<hr />
			<Button value="create" />
		</ModelForm>
	</Modal>
{/if}

<div class="wrap">
	<div class="projectWrap">
		{#each data.category.projectTemplates as template}
			{@const percentDone = calculatePercentDone(template.createdAt, template.deadline)}
			<a class="project" href="/dashboard/admin/templates/{template.id}">
				<div class="projectTitle">
					{template.name}
				</div>

				<div style="color: rgba({(percentDone / 100) * 255}, 0, 0)" class="deadline">
					Deadline: {dayjs(template.deadline).format('MMM D, YYYY')}
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
	hr {
		border: 0px;
	}

	.wrap {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
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

		height: 100%;
		box-sizing: border-box;
		padding: 10px 15px;
		display: flex;
		align-items: center;
		justify-content: start;
		margin-bottom: 15px;
		cursor: pointer;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;
		position: relative;
		z-index: 1;
		background: $background-alt;

		&:hover {
			background: darken($background-alt, 10%);
		}
	}
	.deadline {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: end;
	}
	h2 {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
</style>
