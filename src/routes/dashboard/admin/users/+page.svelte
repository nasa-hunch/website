<script lang="ts">
	import { toast } from 'svelte-french-toast';

	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import { snakeCaseToTitleCase } from '$lib/case';
	import Button from '$lib/components/Button.svelte';
	import Combobox from '$lib/components/Combobox.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ModelForm from '$lib/components/ModalForm.svelte';
	import { Role } from '$lib/enums';

	import type { PageData } from './$types';

	export let data: PageData;

	let selectedUserId = 0;

	type DeleteData = {
		id: number;
		firstName: string;
		lastName: string;
	}

	let deleteData: DeleteData | undefined = undefined;

	let deletePerson = (id: number, firstName: string, lastName: string) => {
		pushState('', {
			modal: 'deleteUser'
		});
		deleteData = {
			id,
			firstName,
			lastName
		};
	};

	export let form;
	$: if (form) {
		if (form.success) {
			toast.success(form.message || 'Action Success!');
		} else {
			toast.error(form.message || 'Action Failed!');
		}
	}
</script>

{#if $page.state.modal === 'deleteUser'}
	<Modal on:close={() => history.back()}>
		<ModelForm action="?/deleteUser" method="post">
			<p>Are you sure you want to delete user #{deleteData?.id}</p>
			<Button value={`Delete ${deleteData?.firstName} ${deleteData?.lastName}'s account`} />
		</ModelForm>
	</Modal>
{/if}

{#if $page.state.modal === 'verifyUser'}
	<Modal on:close={() => history.back()}>
		<ModelForm action="?/verifyUser" method="post">
			<h2>Verify User</h2>
			<input name="id" hidden bind:value={selectedUserId} />
			<Combobox
				name="orgId"
				label="Organization"
				options={[data.orgList, (orgItem) => orgItem.id, (orgItem) => orgItem.name.toString()]}
			/>
			<hr class="spacer" />
			<Button value="verify" />
		</ModelForm>
	</Modal>
{/if}
<main>
	<h1>User Management Panel</h1>

	<table>
		<tr class="headRow">
			<th>Email</th>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Role</th>
			<th>Actions</th>
		</tr>
		{#each data.userList as user}
			<tr>
				<td>{user.email}</td>
				<td>{user.firstName}</td>
				<td>{user.lastName}</td>
				<td>{user.role ? snakeCaseToTitleCase(user.role) : 'Unknown'}</td>
				<td>
					{#if user.role == Role.UNVERIFIED_TEACHER}
						<button
							on:click={() => {
								selectedUserId = user.id;
								pushState('', {
									modal: 'verifyUser'
								});
							}}>verify</button
						>
					{:else if user.role != Role.HUNCH_ADMIN}
						<button
							on:click={() => {
								deletePerson(user.id, user.firstName, user.lastName);
							}}>delete</button
						>
					{/if}
				</td>
			</tr>
		{/each}
	</table>
</main>

<style lang="scss">
	main {
		width: 100%;
		box-sizing: border-box;
	}
	table {
		width: 100%;
		background: #f1f1f1;
		padding: 1rem;
		box-sizing: border-box;
		border-radius: 5px;
	}
	tr {
		width: 100%;
		display: flex;
	}
	th,
	td {
		width: 100%;
		display: flex;
		align-items: start;
		justify-content: start;
		overflow: hidden;
	}
	.headRow {
		border-bottom: 1px solid rgba(0, 0, 0, 0.25);
		margin-bottom: 5px;
		position: sticky;
	}
	.spacer {
		height: 0px;
		border: 0px;
		outline: 0px;
		background: transparent;
	}
	h2 {
		text-align: center;
	}
</style>
