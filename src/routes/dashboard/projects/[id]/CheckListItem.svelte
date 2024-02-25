<script lang="ts">
	import DeleteIcon from '~icons/mdi/delete-outline';
	import DoneIcon from '~icons/mdi/done';
	import AddPersonIcon from '~icons/mdi/person-add-outline';
	import NotDoneIcon from '~icons/mdi/close';
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
	let completing = false;


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

	let completeSubmitHelper = () => {
		toast.promise(new Promise((resolve, reject) => {
			resolvePromise = resolve;
			rejectPromise = reject;
		}), {
			loading: 'Updating item',
			success: 'Item updated!',
			error: 'Item could not be updated.'
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

{#if completing}
	<ModelHelper bind:visible={completing}>
		<ModelForm method="post" action="?/completeToDoItem" on:submit={completeSubmitHelper} on:reset={() => {deleting = false}}>
			<h2>Complete Item</h2>
			<p>Are you sure you want to mark <b>{data.name}</b> as {data.checked ? "not completed": "completed"}?</p>
			<input hidden name="itemId" value={data.id}/>
			<Button value="Update"/>
		</ModelForm>
	</ModelHelper>
{/if}


<div class="checkListItem" class:checked={data.checked}>
	<div class="left">
		<h3>
			{data.name}
		</h3>
	</div>
	<div class="right">
		
		<IconButton on:click={() => {completing = true}}>
			{#if !data.checked}
				<DoneIcon />
			{:else}
				<NotDoneIcon/>
			{/if}
			
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
		position: relative;
		margin: 10px 0px;
		border-radius: 5px;
		padding: 15px;
		box-sizing: border-box;
		background: $background-alt;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		z-index: 2;
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

	.checked {
		background: transparent;

		&::after {
			content: "";
			position: absolute;
			height: 100%;
			width: 100%;
			left: 0px;
			top: 0px;
			background: $green;
			opacity: 0.1;
			border-radius: 5px;
			z-index: -1;
		}
	}
	
</style>
