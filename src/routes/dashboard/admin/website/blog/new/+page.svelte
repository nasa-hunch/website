<script lang="ts">
	import { enhance } from '$app/forms';
    import Button from '$lib/components/Button.svelte';
    import Editor from '$lib/components/Editor.svelte';
    import Input from '$lib/components/Input.svelte';
</script>

<main>
    <form method="POST" action="?/new" use:enhance>
        <h1>New Blog</h1>
    
        <Input label="Post Title" name="title" />
        <div class="margin-separator" />
        <Input label="Post Slug" name="slug" />
        <div class="margin-separator" />
        <Input label="Short Post Description" name="description" />
        <div class="margin-separator" />
    
        <Editor placeholder="Enter blog content..." name="content" />
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
