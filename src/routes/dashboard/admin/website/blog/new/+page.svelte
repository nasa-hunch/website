<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import Editor from '$lib/components/Editor.svelte';
	import Input from '$lib/components/Input.svelte';
</script>

<main>
	<form action="?/new" method="POST" use:enhance>
		<h1>New Blog</h1>

		<Input name="title" label="Post Title" />
		<div class="margin-separator" />
		<Input name="slug" label="Post Slug" />
		<div class="margin-separator" />
		<Input name="description" label="Short Post Description" />
		<div class="margin-separator" />

		<Editor name="content" placeholder="Enter blog content..." />
		<div class="margin-separator" />

		<Button value="Post" />
	</form>
</main>

<style lang="scss">
	form {
		margin: 1rem;
		width: 100%;
		max-width: 800px;
	}

	.margin-separator {
		margin-bottom: 1rem;
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
