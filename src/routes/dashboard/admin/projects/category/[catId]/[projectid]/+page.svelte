<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import Editor from '$lib/components/Editor.svelte';

	export let data;
</script>

<div class="wrap">
	<form class="content" action="?/updateDesc" method="post" use:enhance>
		<Editor
			name="description"
			placeholder="Enter project description..."
			bind:content={data.projectTemplate.description}
		/>
		<div class="ButtonWrap">
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
		align-items: start;
		justify-content: center;
	}

	.content {
		padding-top: 20px;
	}

	.ButtonWrap {
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
