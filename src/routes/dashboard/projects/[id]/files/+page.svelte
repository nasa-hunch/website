<script lang="ts">
	export let data;
	export let form;

	import type { ComponentType, SvelteComponent } from 'svelte';
	import { toast } from 'svelte-french-toast';

	import IconFile from '~icons/mdi/file';
	import IconImage from '~icons/mdi/image';
	import { enhance } from '$app/forms';

	console.log(typeof IconImage);

	const extensionIcons: { [key: string]: ComponentType } = {
		png: IconImage,
		jpg: IconImage
	};

	const extensionSupport = (file: string) => {
		const fileParts = file.split('.');
		const ext = fileParts[fileParts.length - 1].toLowerCase();

		return extensionIcons[ext] || (IconFile as ComponentType);
	};

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
				<div class="icon">
					<svelte:component this={extensionSupport(file.name)} />
				</div>
				{file.name}
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.fileList {
		width: 100%;
		height: 100%;
		margin-top: 20px;
		background: $background-alt;
		position: relative;
		z-index: 2;
		padding: 10px;
		border-radius: 10px;
		overflow-x: hidden;
		box-sizing: border-box;
	}
	.file {
		text-wrap: nowrap;
		display: flex;
		align-items: center;
		justify-content: start;
		padding: 10px 5px;
		font-size: 1.1rem;
		border-bottom: 1px solid $background2;

		.icon {
			margin-right: 5px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.fileView {
		height: 100%;
		width: 100%;
	}
	.uploadFileThing::after {
		position: absolute;
		content: '';
		background: $background;
		top: 0px;
		left: 0px;
		height: 100%;
		width: 100%;
		opacity: 0.5;
		z-index: 1;
		border-radius: 5px 0px 0px 5px;
	}
</style>
