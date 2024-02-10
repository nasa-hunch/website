<script lang="ts">
	import dayjs from 'dayjs';
	import Button from "$lib/components/Button.svelte"
	export let data;
	import ModelHelper from "$lib/components/ModelHelper.svelte"
	import ModelForm from "$lib/components/ModelForm.svelte"
	import Input from "$lib/components/Input.svelte"


	let creatingProject = false;

	const calculatePercentDone = (startDay: Date, endDay: Date) => {
		const startTimestamp = dayjs(startDay).unix();
		const endTimestamp = dayjs(endDay).unix();
		const currentTimestamp = dayjs().unix();

		const totalTime = endTimestamp - startTimestamp;
		const currentTime = endTimestamp - currentTimestamp;

		const percent = (totalTime - currentTime)/totalTime
		const maxPercent = Math.min(100, Math.max(percent, 0))
		console.log(maxPercent)
		
		return maxPercent;
		
	}
</script>

<ModelHelper bind:visible={creatingProject}>
	<ModelForm method="post" action="?/createProject">
		<h2>Creating Project</h2>
		<Input name="name" label="Name" bgColor="#f1f1f1"/>
		<Input name="desc" label="Description" bgColor="#f1f1f1"/>
		<input type="date" name="deadline"/>
		<Button value="create"/>
	</ModelForm>
</ModelHelper>

<div class="wrap">
	<div class="header">
		<h1>{data.category?.name}</h1>
	</div>
	<div class="projectWrap">
		{#each data.category.projectTemplates as project}
		{@const percentDone = calculatePercentDone(project.createdAt, project.deadline)}
			<div class="project">
				<div class="projectTitle">
					{project.name}
				</div>
				
				<div class="deadline" style="color: rgba({percentDone/100 * 255}, 0, 0)">
					Deadline: {dayjs(project.deadline).format("MMM D, YYYY")}
				</div>
			</div>
		{/each}
		<Button value="New Project" type="button" on:click={() => {creatingProject = true}}/>
	</div>
	
	
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
	}
	.header {
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
		background: $background-alt;
		font-size: 1.2rem;
	}
	.project {
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
	}
	.deadline {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: end;
	}
	h2 {
		text-align: center;
	}

	
</style>