<script lang="ts">
	export let form: {
		message: string;
		success?: boolean;
	} | null = null;

	import dayjs from 'dayjs';
	import localizedFormat from 'dayjs/plugin/localizedFormat';
	import { toast } from 'svelte-french-toast';

	import Button from '$lib/components/Button.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ModelForm from '$lib/components/ModalForm.svelte';
	dayjs.extend(localizedFormat);

	import IconTrash from '~icons/mdi/delete-outline';
	import IconDownload from '~icons/mdi/download';
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import IconButton from '$lib/components/IconButton.svelte';
	import InTextInput from '$lib/components/InTextInput.svelte';
	import DragDropUpload from '$lib/fileManager/DragDropUpload.svelte';
	import { createDisplayInformation } from '$lib/fileManager/extensionSupport.js';

	import { getFormattedSize } from './sizeCalculator';
	import Filter from '$lib/components/Filter.svelte';
	import FilterIcon from "~icons/mdi/filter"

	export let files: {
		name: string;
		link: string;
		id: number;
		size: number;
		updatedAt: Date;
		locked?: boolean;
	}[];

	let toastPromiseResolve: (message: string) => void, toastPromiseReject: (reason: string) => void;
	let toastPromise: Promise<string> = new Promise((resolve, reject) => {
		toastPromiseResolve = resolve;
		toastPromiseReject = reject;
	});

	const createToast = (loadingMessage: string, successMessage: string, failMessage: string) => {
		console.log('Creating toast promise');
		toastPromise = new Promise((resolve, reject) => {
			toastPromiseResolve = resolve;
			toastPromiseReject = reject;
		});

		console.log('Promising Toast');
		toast.promise(toastPromise, {
			loading: loadingMessage,
			success: (message) => `${message}` || successMessage,
			error: (message) => `${message}` || failMessage
		});
	};

	$: if (form) {
		if (form.success) {
			toastPromiseResolve(form.message);
		} else {
			toastPromiseReject(form.message);
		}
		form = null;
	}

	export let actions = true;

	let doingFileDeleteOn: string;
	let doingFileDeleteOnId: number;
	const deleteFile = (id: number, fileName: string) => {
		doingFileDeleteOnId = id;
		doingFileDeleteOn = fileName;
		pushState('', { modal: 'deleteFile' });
	};

	const startFileUpload = () => {
		console.log('Calling function');
		createToast('Uploading File...', 'File Uploaded!', 'Could not upload file.');
	};

	const deleteFileSubmit = () => {
		createToast('Deleting File...', 'File Deleted!', 'Could not delete file.');
	};

	const fileNameChange = () => {
		createToast('Updating File...', 'File Updated!', 'Could not update file.');
	};

	let filterComponent: Filter;
</script>

{#if $page.state.modal === 'deleteFile'}
	<Modal on:close={() => history.back()}>
		<ModelForm action="?/deleteFile" method="post" on:submit={deleteFileSubmit}>
			<div class="deleteForm">
				<input name="fileId" hidden value={doingFileDeleteOnId} />
				<h2>Are you sure?</h2>
				<p>Are you sure you want to delete <b>{doingFileDeleteOn}</b>?</p>
				<Button type="submit" value="Confirm" />
			</div>
		</ModelForm>
	</Modal>
{/if}

<Filter bind:this={filterComponent} param="showFileExtension" filters={[
	{
		name: "Show Extensions",
		value: "true",
	},
	{
		name: "Hide Extensions",
		value: "false"
	}
]}/>

<div class="wrap">
	<DragDropUpload action="?/uploadFile" disabled={!actions} on:startUpload={startFileUpload}>
		<table class="fileList">
			<thead>
				<tr>
					<th class="nameRow" scope="col">Name <IconButton on:click={(e) => {filterComponent.propagateClick(e)}}><FilterIcon/></IconButton></th>
					<th scope="col">Size</th>
					<th scope="col">Modified</th>
					<th scope="col">Actions</th>
				</tr>
			</thead>
			<tbody>
				{#each files as file}
					{@const fileData = createDisplayInformation(file.name, $page.url.searchParams.get("showFileExtension") == "true")}
					<tr class="file">
						<th class="name" class:dimmed={file.locked} scope="row">
							
							<div class="icon">
								<svelte:component this={fileData.extensionIcon}/>
							</div>						
							<InTextInput
								name="fileName"
								action="?/renameFile"
								value={fileData.fileName}
								disabled={file.locked}
								on:submit={fileNameChange}
							>
								<input type="checkbox" name="showFileExtension" checked={$page.url.searchParams.get("showFileExtension") == "true"}/>
								<input name="fileId" value={file.id} />
							</InTextInput>
						</th>
						<td>
							{getFormattedSize(file.size)}
						</td>
						<td>
							{dayjs(file.updatedAt).format('MM/DD/YYYY h:mm A')}
						</td>
						<td class="actionsRow">
							<IconButton href={file.link}>
								<IconDownload />
							</IconButton>
							{#if actions}
								<IconButton
									disabled={file.locked}
									on:click={() => {
										deleteFile(file.id, file.name);
 									}}
								>
									<IconTrash />
								</IconButton>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
		{#if actions}
			<div class="infoBox">
				<p>
					{#if files.length < 1}
						<span class="accentText">No files yet!</span>
					{/if}
					<span>Drag and drop to upload files.</span>
				</p>
			</div>
		{/if}
	</DragDropUpload>
</div>

<style lang="scss">
	.wrap {
		background: $background-alt;
		margin: 1rem 0px;
		padding: 10px;
		box-sizing: border-box;
		border-radius: 0.25rem;
	}
	.fileList {
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 2;
		padding: 10px;
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
	.nameRow {
		display: flex;
		align-items: center;
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

	.deleteForm {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
	}
	.infoBox {
		width: 100%;
		text-align: center;
	}
	.accentText {
		color: $primary;
	}
	.dimmed {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
