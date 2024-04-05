<script lang="ts">
	import Pfp from '$lib/components/Pfp.svelte';

	export let user;
</script>

<main>
	<div class="title">
		<Pfp user={user} size="100px" />
		<h1>{user.firstName} {user.lastName}</h1>
		<h2>{user.email}</h2>
	</div>
</main>

<style lang="scss">
	main {
		margin-top: 1rem;
	}

	.title {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		border-radius: 0.5rem;
		background-color: var(--background-alt);
		color: black;

		img {
			width: 100px;
			height: 100px;
			border-radius: 50%;
		}
	}
</style>
