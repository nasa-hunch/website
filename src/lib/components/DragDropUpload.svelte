<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { enhance } from '$app/forms';

	export let method = 'post';
	export let action = '?/uploadFile';

	const dispatch = createEventDispatcher();

	let fileBox: HTMLInputElement;
	let fileUploadButton: HTMLButtonElement;
	let uploadPromise: Promise<unknown>;

	const dropHandler = (e: DragEvent) => {
		e.preventDefault();
		dragging = false;
		if (!e.dataTransfer) {
			return;
		}
		fileBox.files = e.dataTransfer.files;
		fileUploadButton.click();
		dispatch('startUpload');
	};
	const dragOverHandler = (e: Event) => {
		dragging = true;
		e.preventDefault();
	};

	let dragging = false;

	const stopDragOver = () => {
		dragging = false;
	};
</script>

<form {action} enctype="multipart/form-data" hidden {method} use:enhance>
	<input bind:this={fileBox} name="file" type="file" />
	<button bind:this={fileUploadButton} type="submit" />
</form>

<button
	class="dragField"
	on:dragover={dragOverHandler}
	on:drop={dropHandler}
	on:dragleave={stopDragOver}
>
	<slot />
</button>

<style lang="scss">
	.dragField {
		all: unset;
		width: 100%;
	}
</style>
