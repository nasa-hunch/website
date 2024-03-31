<script lang="ts">
	import { enhance } from "$app/forms";
	import { createEventDispatcher } from "svelte";

	export let method = "post"
	export let action = "?/uploadFile"

	const dispatch = createEventDispatcher()

	let fileBox: HTMLInputElement
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
		dispatch("startUpload")
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

<form enctype="multipart/form-data" hidden {method} {action} use:enhance>
	<input type="file" bind:this={fileBox}/>
	<button type="submit" bind:this={fileUploadButton}/>
</form>

<button class="dragField" on:dragover={dragOverHandler} on:drop={dropHandler} on:dragleave={stopDragOver}>
	<slot/>
</button>

<style lang="scss">
	.dragField{
		all: unset;
		width: 100%;

		
	}
	
</style>