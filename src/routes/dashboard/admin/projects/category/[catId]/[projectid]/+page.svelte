<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';

	export let data;
</script>

<div class="wrap">
	<form class="content" action="?/updateDesc" method="post" use:enhance>
		<textarea
			name="description"
			placeholder="Description"
			bind:value={data.projectTemplate.description}
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
		width: 90%;
		padding-top: 20px;
	}

	textarea {
		width: 100%;
		border-radius: 5px;
		padding: 10px;
		font-size: 1.1rem;
		box-sizing: border-box;
		outline: 1px solid gray;
		border: 0px;
		resize: vertical;
		min-height: 300px;

		&:focus,
		&:active {
			outline: 1px solid $secondary;
		}
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
