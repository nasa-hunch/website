<script lang="ts">
	import Plus from '~icons/mdi/note-plus';
	import IconButton from '$lib/components/IconButton.svelte';

	export let data;
</script>

<main>
	<h1>
		Blog
		<IconButton href="/dashboard/admin/website/blog/new">
			<Plus />
		</IconButton>
	</h1>

	{#if data.posts.length > 0}
		<div class="post">
			{#each data.posts as post}
				<div class="post">
					<h2>{post.title}</h2>
					<h3>{post.summary}</h3>
					<p>{post.content}</p>
				</div>
			{/each}
		</div>
	{:else}
		<p><i>No posts found.</i></p>
	{/if}
</main>

<style lang="scss">
	main {
		margin: 1rem;
	}

	h1 {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
