<script lang="ts">
	export let form: {
		message: string;
		success?: boolean;
	} | null;

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
	import { extensionSupport } from '$lib/fileManager/extensionSupport.js';

	import { getFormattedSize } from './sizeCalculator';

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

	async function getError(promise: Promise<unknown>): Promise<unknown> {
		try {
			await promise;
		} catch (error) {
			return error;
		}
	}

	const createToast = async (
		loadingMessage: string,
		successMessage: string,
		failMessage: string
	) => {
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
</script>

{#if $page.state.modal === 'deleteFile'}
	<Modal on:close={() => history.back()}>
		<ModelForm action="?/deleteFile" method="post" on:submit={deleteFileSubmit}>
			<div class="deleteForm">
				<input name="fileId" hidden value={doingFileDeleteOnId} />
				<h2>Are you sure?</h2>
				<p>Are you sure you want to delete <b>{doingFileDeleteOn}</b></p>
				<Button type="submit" value="Confirm" />
			</div>
		</ModelForm>
	</Modal>
{/if}

<div class="wrap">
	<p>Drag and drop files to upload.</p>
	<DragDropUpload action="?/uploadFile" on:startUpload={startFileUpload}>
		<table class="fileList">
			<thead>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">Size</th>
					<th scope="col">Modified</th>
					<th scope="col">Actions</th>
				</tr>
			</thead>
			<tbody>
				{#each files as file}
					<tr class="file">
						<th class="name" scope="row">
							<div class="icon">
								<svelte:component this={extensionSupport(file.name)} />
							</div>
							<InTextInput
								name="fileName"
								action="?/renameFile"
								value={file.name}
								on:submit={fileNameChange}
							>
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
							<IconButton
								disabled={file.locked}
								on:click={() => {
									deleteFile(file.id, file.name);
								}}
							>
								<IconTrash />
							</IconButton>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</DragDropUpload>
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
