<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: titleCasedRole =
		data.user.role.toLowerCase().substring(0, 1).toUpperCase() +
		data.user.role.toLowerCase().substring(1);
</script>

<main>
	<h1>Settings</h1>

	<h2>User Information</h2>

	<p>First Name: {data.user.firstName}</p>
	<p>Last Name: {data.user.lastName}</p>
	<p>Email: <a href="mailto:{data.user.email}">{data.user.email}</a></p>
	<p>Role: {titleCasedRole}</p>
</main>

<style>
	main {
		margin: 1rem;
	}
</style>
