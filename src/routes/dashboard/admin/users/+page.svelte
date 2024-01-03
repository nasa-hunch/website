<script lang="ts">
	import { Role } from '$lib/enums';
	import type { PageData } from './$types';
	import ModelHelper from '$lib/components/ModelHelper.svelte';
	import Button from '$lib/components/Button.svelte';
	import ModelForm from '$lib/components/ModelForm.svelte';

	export let data: PageData;
	let showDeleteForm = false;

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

<ModelHelper bind:visibile={showDeleteForm}>
	<ModelForm method="post" action="?/deleteUser">
		<p>Are you sure you want to delete user #{deleteData?.id}</p>
		<Button value={`Delete ${deleteData?.firstName} ${deleteData?.lastName}'s account`} />
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
						<button on:click={() => {}}>verify</button>
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

<style>
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
</style>
