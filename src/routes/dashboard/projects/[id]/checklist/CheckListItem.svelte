<script lang="ts">
	import toast from 'svelte-french-toast';

	import NotDoneIcon from '~icons/mdi/close';
	import DeleteIcon from '~icons/mdi/delete-outline';
	import DoneIcon from '~icons/mdi/done';
	import AddPersonIcon from '~icons/mdi/person-add-outline';
	import { enhance } from '$app/forms';
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import FloatingComboBox from '$lib/components/FloatingComboBox.svelte';
	import IconButton from '$lib/components/IconButton.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ModelForm from '$lib/components/ModalForm.svelte';

	import Assignees from './Assignees.svelte';
	import Pfp from '$lib/components/Pfp.svelte';

	type CheckListItem = {
		id: number;
		createdAt: Date;
		updatedAt: Date;
		name: string;
		checked: boolean;
		projectId: number;
		checkedById: number | null;
		assignees: {
			id: number;
			projectUser: {
				id: number;
				user: {
					pfp: string | null;
					firstName: string;
					lastName: string;
				};
			};
		}[];
	};

	type UserLike = {
		id: number;
		createdAt: Date;
		updatedAt: Date;
		userId: number;
		projectId: number;
		owner: boolean;
		user: {
			firstName: string;
			lastName: string;
			pfp: string | null;
		};
	};

	export let projectUsers: UserLike[] = [];
	export let data: CheckListItem;
	export let resolvePromise: (value?: unknown) => void;
	export let rejectPromise: (value?: unknown) => void;

	const checkAssignee = (user: UserLike) => {
		let found = false;
		data.assignees.forEach((item) => {
			console.log(item.projectUser.id, user.id)
			if(item.projectUser.id == user.id) {
				found = true

			}
		})
		return found
	}

	let deleteSubmitHelper = () => {
		toast.promise(
			new Promise((resolve, reject) => {
				resolvePromise = resolve;
				rejectPromise = reject;
			}),
			{
				loading: 'Deleting Item',
				success: 'Item Deleted!',
				error: 'Item could not be deleted.'
			}
		);
	};

	let completeSubmitHelper = () => {
		toast.promise(
			new Promise((resolve, reject) => {
				resolvePromise = resolve;
				rejectPromise = reject;
			}),
			{
				loading: 'Updating item',
				success: 'Item updated!',
				error: 'Item could not be updated.'
			}
		);
	};

	const assigneeSubmitHelper = () => {
		toast.promise(
			new Promise((resolve, reject) => {
				resolvePromise = resolve;
				rejectPromise = reject;
			}),
			{
				loading: 'Adding assignee',
				success: 'Assignee added!',
				error: 'Assignee could not be added'
			}
		);
	};

	let searchBox: FloatingComboBox<UserLike>;

	const startAddPerson = (e: MouseEvent) => {
		searchBox.propagateClick(e);

		selectingUser = true;
	};

	let selectingUser = false;
</script>

{#if $page.state.modal === `deleteItem${data.id}`}
	<Modal on:close={() => history.back()}>
		<ModelForm
			action="?/deleteToDoItem"
			method="post"
			on:submit={deleteSubmitHelper}
			on:reset={() => history.back()}
		>
			<h2>Delete Item</h2>
			<p>Are you sure you want to delete <b>{data.name}</b></p>
			<input name="itemId" hidden value={data.id} />
			<Button value="Delete" />
		</ModelForm>
	</Modal>
{/if}

<FloatingComboBox
	bind:this={searchBox}
	data={[projectUsers, (item) => item.id, (item) => `${item.user.firstName} ${item.user.lastName}`]}
	bind:showSelector={selectingUser}
	let:filteredData
>
	{#each filteredData as user}
		{#if !checkAssignee(user)}
			<form
				action="?/addAssignee"
				method="post"
				on:submit={assigneeSubmitHelper}
				on:reset={() => (selectingUser = false)}
				use:enhance
			>
				
				<input name="itemId" hidden value={data.id} />
				<input name="projectUserId" hidden value={user.id} />
				<button class="assigneeButton">
					<Pfp user={user.user}/>
					{user.user.firstName}
					{user.user.lastName}
				</button>
			</form>
		{/if}
	{/each}
</FloatingComboBox>

{#if $page.state.modal === `completeItem${data.id}`}
	<Modal on:close={() => history.back()}>
		<ModelForm
			action="?/completeToDoItem"
			method="post"
			on:submit={completeSubmitHelper}
			on:reset={() => history.back()}
		>
			<h2>Complete Item</h2>
			<p>
				Are you sure you want to mark <b>{data.name}</b> as {data.checked
					? 'not completed'
					: 'completed'}?
			</p>
			<input name="itemId" hidden value={data.id} />
			<Button value="Update" />
		</ModelForm>
	</Modal>
{/if}

<div class="checkListItem" class:checked={data.checked}>
	<div class="left">
		<h3>
			{data.name}
		</h3>
		<Assignees assignees={data.assignees} bind:resolvePromise bind:rejectPromise />
	</div>
	<div class="right">
		<IconButton
			on:click={() => {
				pushState('', {
					modal: `completeItem${data.id}`
				});
			}}
		>
			{#if !data.checked}
				<DoneIcon />
			{:else}
				<NotDoneIcon />
			{/if}
		</IconButton>

		<IconButton on:click={startAddPerson}>
			<AddPersonIcon />
		</IconButton>
		<IconButton
			on:click={() => {
				pushState('', {
					modal: `deleteItem${data.id}`
				});
			}}
		>
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
			content: '';
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

	.assigneeButton {
		position: relative;
		all: unset;
		cursor: pointer;
		text-align: center;
		padding: 7px 10px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		flex-direction: row;
		width: 100%;
		border-radius: 3px;
		transition: all cubic-bezier(0.55, 0.055, 0.675, 0.19) 0.05s;
	}
	.assigneeButton:hover {
		background: rgba(0, 0, 0, 0.15);
	}
</style>
