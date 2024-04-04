<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { enhance } from '$app/forms';

	export let method = 'post';
	export let action = '?/uploadFile';

	const dispatch = createEventDispatcher();

	let fileBox: HTMLInputElement;
	let fileUploadButton: HTMLButtonElement;
	let draggedOver = false;

	const dropHandler = (e: DragEvent) => {
		e.preventDefault();
		if (!e.dataTransfer) {
			return;
		}
		dispatch('startUpload');
		fileBox.files = e.dataTransfer.files;
		fileUploadButton.click();

		draggedOver = false;
	};
	const dragOverHandler = (e: Event) => {
		e.preventDefault();
		draggedOver = true;
	};

	const dragOverEnd = () => {
		draggedOver = false;
	};
</script>

<form {action} enctype="multipart/form-data" hidden {method} use:enhance>
	<input bind:this={fileBox} name="file" type="file" />
	<button bind:this={fileUploadButton} type="submit" />
</form>

<button
	class="dragField"
	class:active={draggedOver}
	on:dragover={dragOverHandler}
	on:drop={dropHandler}
	on:dragleave={dragOverEnd}
>
	<slot />
</button>

<style lang="scss">
	.dragField {
		all: unset;
		width: 100%;
	}
	.active {
		backdrop-filter: blur(3px);
		opacity: 0.5;
	}
</style>
