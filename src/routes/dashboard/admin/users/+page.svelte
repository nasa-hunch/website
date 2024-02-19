<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Combobox from '$lib/components/Combobox.svelte';
	import type ComboOptions from "$lib/components/Combobox.svelte"
	import ModelForm from '$lib/components/ModelForm.svelte';
	import ModelHelper from '$lib/components/ModelHelper.svelte';
	import { Role } from '$lib/enums';

	import type { PageData } from './$types';

	export let data: PageData;
	let showDeleteForm = false;

	let verifyUserForm = false;
	let selectedUserId = 0;


	type DeleteData =
		| {
				id: number;
				firstName: string;
				lastName: string;
		  }
		| undefined;

	let deleteData: DeleteData;

	let deletePerson = (id: number, firstName: string, lastName: string) => {
		showDeleteForm = true;
		deleteData = {
			id,
			firstName,
			lastName
		};
	};
	

</script>

<ModelHelper bind:visible={showDeleteForm}>
	<ModelForm action="?/deleteUser" method="post">
		<p>Are you sure you want to delete user #{deleteData?.id}</p>
		<Button value={`Delete ${deleteData?.firstName} ${deleteData?.lastName}'s account`} />
	</ModelForm>
</ModelHelper>

<ModelHelper bind:visible={verifyUserForm}>
	<ModelForm action="?/verifyUser" method="post">
		<h2>Verify User</h2>
		<input name="id" hidden bind:value={selectedUserId} />
		<Combobox name="orgId" label="Organization" options={[data.orgList, (orgItem) => orgItem.id, (orgItem) => orgItem.name.toString()]} />
		<hr class="spacer" />
		<Button value="verify" />
	</ModelForm>
</ModelHelper>
<main>
	<h1>User Management Panel</h1>

	<table>
		<tr class="headRow">
			<th>id</th>
			<th>email</th>
			<th>first name</th>
			<th>last name</th>
			<th>role</th>
			<th>actions</th>
		</tr>
		{#each data.userList as user}
			<tr>
				<td>{user.id}</td>
				<td>{user.email}</td>
				<td>{user.firstName}</td>
				<td>{user.lastName}</td>
				<td>{user.role}</td>
				<td>
					{#if user.role == Role.UNVERIFIED_TEACHER}
						<button
							on:click={() => {
								selectedUserId = user.id;
								verifyUserForm = true;
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
		margin: 1rem;
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
