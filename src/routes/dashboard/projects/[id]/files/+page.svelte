<script lang="ts">
	export let data;
	export let form;

	import type { ComponentType, SvelteComponent } from 'svelte';
	import { toast } from 'svelte-french-toast';
	import localizedFormat from "dayjs/plugin/localizedFormat"
	import dayjs from "dayjs"
	import ModelHelper from "$lib/components/ModelHelper.svelte"
	import ModelForm from "$lib/components/ModelForm.svelte"
	import Button from "$lib/components/Button.svelte"
	dayjs.extend(localizedFormat)


	import IconFile from '~icons/mdi/file';
	import IconImage from '~icons/mdi/image';
	import IconDownload from '~icons/mdi/download';
	import IconTrash from '~icons/mdi/delete-outline';
	import { enhance } from '$app/forms';
	import InTextInput from '$lib/components/InTextInput.svelte';

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

	let doingFileDelete = false;
	let doingFileDeleteOn: string;
	let doingFileDeleteOnId: number;
	const deleteFile = (id: number, fileName: string) => {
		doingFileDeleteOnId = id;
		doingFileDeleteOn = fileName;
		doingFileDelete = true;
	}

	const deleteFileSubmit = () => {

		doingFileDelete = false;

		uploadPromise = new Promise((resolve, reject) => {
			uploadResolve = resolve;
			uploadReject = reject;
		});

		toast.promise(uploadPromise, {
			loading: 'Deleting File...',
			success: form?.message || 'File Deleted!',
			error: form?.message || 'Could not delete file.'
		});
	}

	const fileNameChange = () => {
		uploadPromise = new Promise((resolve, reject) => {
			uploadResolve = resolve;
			uploadReject = reject;
		});

		toast.promise(uploadPromise, {
			loading: 'Updating File...',
			success: form?.message || 'File Updated!',
			error: form?.message || 'Could not update file.'
		});
	}

</script>

<form action="?/uploadFile" enctype="multipart/form-data" hidden method="post" use:enhance>
	<input bind:this={fileBox} name="file" type="file" />
	<button bind:this={fileUploadButton} />
</form>

<ModelHelper bind:visible={doingFileDelete}>
	<ModelForm method="post" action="?/deleteFile" on:submit={deleteFileSubmit}>
		<div class="deleteForm">
			<input hidden name="fileId" value={doingFileDeleteOnId}/>
			<h2>Are you sure?</h2>
			<p>Are you sure you want to delete <b>{doingFileDeleteOn}</b></p>
			<Button value="Confirm"></Button>
		</div>
		
	</ModelForm>
</ModelHelper>

<div class="wrap">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<table
		class="fileList"
		class:uploadFileThing={dragging}
		on:drop={dropHandler}
		on:dragover={dragOverHandler}
		on:dragleave={stopDragOver}
	>	
	<thead>
		<tr>
			<th scope="col">Name</th>
			<th scope="col">Size</th>
			<th scope="col">Modified</th>
			<th scope="col">Deliverable</th>
			<th scope="col">Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each data.files as file}
			<tr class="file">
				<th scope="row" class="name">
					<div class="icon">
						<svelte:component this={extensionSupport(file.name)} />
					</div>
					<InTextInput name="fileName" value={file.name} action="?/renameFile" on:submit={fileNameChange}>
						<input name="fileId" value={file.id}/>
					</InTextInput>
					
				</th>
				<td> 
					{file.size}
				</td>
				<td> 
					{dayjs(file.updatedAt).format("MM/DD/YYYY h:mm A")}
				</td>
				<td> 
					{file.size}
				</td>
				<td class="actionsRow"> 
					<a href="{file.link}" class="iconButton">
						<IconDownload/>
					</a>
					<button class="iconButton" on:click={() => {deleteFile(file.id, file.name)}}>
						<IconTrash/>
					</button>
				</td>
				
			</tr>
		{/each}
	</tbody>
	</table>
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
	.name {
		display: flex;
		flex-direction: row;
		overflow-x: hidden;
	}
	td {
		text-align: left;
	}
	tr {
		text-align: left;
	}

	.actionsRow {
		display: flex;
		align-items: center;
		justify-content: start;
	}
	
	.iconButton {
		all: unset;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		padding: 5px;
		border-radius: 50%;
		
	}
	.iconButton:hover {
		background: $background2;
	}
	.deleteForm {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
	}
	
	
</style>
