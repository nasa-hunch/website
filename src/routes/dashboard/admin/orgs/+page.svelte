<script lang="ts">
	import Fuse from 'fuse.js';

	export let data;

	const fuse = new Fuse(data.organizations, {
		keys: ['name']
	});

	let searchInput = '';

	$: searchedOrgs = searchInput
		? fuse.search(searchInput).map((data) => data.item)
		: data.organizations;
</script>

<main>
	<h1>Organizations</h1>

	<input placeholder="Search..." type="text" bind:value={searchInput} />

	<div class="organizations">
		{#each searchedOrgs as org}
			<a class="org" href="/dashboard/orgs/{org.id}">
				<h2>{org.name}</h2>
			</a>
		{/each}
	</div>
</main>

<style lang="scss">
	main {
		margin: 1rem;
	}

	input {
		width: 100%;
		padding: 0.5rem;
		margin: 1rem 0;
		border: 1px solid #ccc;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		border: 0;
		border-radius: 0.5rem;
	}

	.organizations {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;

		.org {
			background: white;
			padding: 1rem;
			border-radius: 0.5rem;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			color: black;
			transition: background 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

			&:hover {
				background: #f0f0f0;
			}
		}
	}
</style>
