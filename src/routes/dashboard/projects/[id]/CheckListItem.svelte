<script lang="ts">
	import DeleteIcon from '~icons/mdi/delete-outline';
	import DoneIcon from '~icons/mdi/done';
	import AddPersonIcon from '~icons/mdi/person-add-outline';
	import IconButton from '$lib/components/IconButton.svelte';
	import ModelHelper from '$lib/components/ModelHelper.svelte';
	import ModelForm from '$lib/components/ModelForm.svelte';
	import Button from "$lib/components/Button.svelte"

	import type { ActionData } from './$types';
	import toast from 'svelte-french-toast';



	type CheckListItem = {
		id: number;
		createdAt: Date;
		updatedAt: Date;
		name: string;
		checked: boolean;
		projectId: number;
		checkedById: number | null;
	};
	export let data: CheckListItem;
	export let resolvePromise: (value?: unknown) => void;
	export let rejectPromise: (value?: unknown) => void;

	let deleting = false;


	let deleteSubmitHelper = () => {
		toast.promise(new Promise((resolve, reject) => {
			resolvePromise = resolve;
			rejectPromise = reject;
		}), {
			loading: 'Deleting Item',
			success: 'Item Deleted!',
			error: 'Item could not be deleted.'
		});
	}
	
</script>

<ModelHelper bind:visible={deleting}>
	<ModelForm method="post" action="?/deleteToDoItem" on:submit={deleteSubmitHelper} on:reset={() => {deleting = false}}>
		<h2>Delete Item</h2>
		<p>Are you sure you want to delete <b>{data.name}</b></p>
		<input hidden name="itemId" value={data.id}/>
		<Button value="Delete"/>
	</ModelForm>
</ModelHelper>

<div class="checkListItem">
	<div class="left">
		<h3>
			{data.name}
		</h3>
	</div>
	<div class="right">
		<IconButton>
			<DoneIcon />
		</IconButton>
		<IconButton>
			<AddPersonIcon />
		</IconButton>
		<IconButton on:click={() => {deleting = true}}>
			<DeleteIcon />
		</IconButton>
	</div>
</div>

<style lang="scss">
	.checkListItem {
		margin: 10px 0px;
		border-radius: 5px;
		padding: 15px;
		box-sizing: border-box;
		background: $background-alt;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.left {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: start;
	}
	.right {
		display: flex;
		flex-direction: row;
	}

	h3 {
		all: unset;
		font-size: 1.2rem;
		margin: 0px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
