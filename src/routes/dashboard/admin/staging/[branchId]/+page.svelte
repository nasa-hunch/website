<script lang="ts">
	import { enhance } from '$app/forms';
	export let data;
	import Button from '$lib/components/Button.svelte';
</script>

<div class="wrap">
	<div class="stages">
		{#each data.stages as stage}
			<div class="stage">
				<p>{stage.dueDate}</p>
			</div>
		{/each}
	</div>

	<form action="?/createStage" method="post" use:enhance>
		<Button value="New Stage" />
	</form>
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		margin: 1rem 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.stage {
		display: flex;
		padding: 0rem 0.5rem;
		box-sizing: border-box;
		margin-bottom: 0.25rem;
		border-radius: 0.25rem;
		width: 100%;
		background: $background-alt;
	}
</style>
