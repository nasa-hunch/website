<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import Editor from '$lib/components/Editor.svelte';

	export let data;
</script>

<div class="wrap">
	<form class="content" action="?/updateDesc" method="post" use:enhance>
		<h2>Short Description</h2>

		<Editor
			name="shortDescription"
			placeholder="Enter short description..."
			bind:content={data.projectTemplate.shortDescription}
		/>

		<h2>Description</h2>
		<Editor
			name="description"
			placeholder="Enter project description..."
			bind:content={data.projectTemplate.description}
		/>
		<div class="buttonWrap">
			<div class="innerButtonWrap">
				<Button value="Save" />
			</div>
		</div>
	</form>
</div>

<style lang="scss">
	.wrap {
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 0.5rem;
	}

	h2 {
		text-align: center;
	}

	.buttonWrap {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 10px;
	}
	.innerButtonWrap {
		width: 100%;
		max-width: 250px;
	}
</style>
