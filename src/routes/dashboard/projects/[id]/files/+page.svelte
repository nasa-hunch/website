<script lang="ts">
	export let data;
	export let form;

	import { toast } from 'svelte-french-toast';

	import { enhance } from '$app/forms';

	let fileUploadButton: HTMLButtonElement;
	let fileBox: HTMLInputElement;

	let uploadResolve: (value?: unknown) => void, uploadReject: (value?: unknown) => void;
	let uploadPromise = new Promise((resolve, reject) => {
		uploadResolve = resolve;
		uploadReject = reject;
	});

	$: if (form) {
		console.log(form);
		if (form.success) {
			console.log(form.message);
			uploadResolve();
		} else {
			console.log(form.message);
			uploadReject();
		}
		form = null;
	}

	const dropHandler = (e: DragEvent) => {
		e.preventDefault();
		dragging = false;
		if (!e.dataTransfer) {
			return;
		}
		fileBox.files = e.dataTransfer.files;
		fileUploadButton.click();

		console.log('preping toast');

		uploadPromise = new Promise((resolve, reject) => {
			uploadResolve = resolve;
			uploadReject = reject;
		});

		toast.promise(uploadPromise, {
			loading: 'Uploading File...',
			success: form?.message || 'File uploaded!',
			error: form?.message || 'Could not upload file.'
		});
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

<form action="?/uploadFile" enctype="multipart/form-data" hidden method="post" use:enhance>
	<input bind:this={fileBox} name="file" type="file" />
	<button bind:this={fileUploadButton} />
</form>

<div class="wrap">
	<div class="fileExplorer">
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="fileList"
			class:uploadFileThing={dragging}
			on:drop={dropHandler}
			on:dragover={dragOverHandler}
			on:dragleave={stopDragOver}
		>
			{#each data.files as file}
				<div class="file">
					{file.name}
				</div>
			{/each}
		</div>
		<div class="fileView" />
	</div>
</div>

<style lang="scss">
	.fileExplorer {
		width: 100%;
		height: 100%;
		background: $background2;
		border-radius: 5px;
		margin-top: 20px;
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
	}
	.fileList {
		min-width: 200px;
		min-height: 200px;
		border-right: 1px solid $background3;
		position: relative;
		z-index: 2;
		padding: 5px;
		box-sizing: border-box;
	}
	.fileView {
		height: 100%;
		width: 100%;
	}
	.uploadFileThing::after {
		position: absolute;
		content: '';
		background: $primary;
		top: 0px;
		left: 0px;
		height: 100%;
		width: 100%;
		opacity: 0.5;
		z-index: 1;
		border-radius: 5px 0px 0px 5px;
	}
</style>
