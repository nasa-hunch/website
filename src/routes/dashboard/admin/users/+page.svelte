<script lang="ts">
	import { Role } from '@prisma/client';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	<h1>User Management Panel</h1>

	<table>
		<tr>
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
						<button on:click={() => {}}>delete</button>
					{/if}
				</td>
			</tr>
		{/each}
	</table>
</main>

<style>
	main {
		margin: 1rem;
	}
</style>
