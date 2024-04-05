<script lang="ts">
	import Pfp from '$lib/components/Pfp.svelte';

	export let data;
</script>

<main>
	<div class="title">
		<Pfp user={data.user} size="100px" />
		<h1>{data.selectedUser.firstName} {data.selectedUser.lastName}</h1>
		<h2>{data.selectedUser.email}</h2>
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
