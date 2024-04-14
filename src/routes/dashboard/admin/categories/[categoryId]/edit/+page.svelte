<script lang="ts">
	import { enhance, applyAction } from "$app/forms";
    import Input from '$lib/components/Input.svelte';
    import DatePicker from '$lib/components/DatePicker.svelte';
    import Editor from '$lib/components/Editor.svelte';
    import Button from '$lib/components/Button.svelte';
	import { invalidateAll } from "$app/navigation";

    export let data;
</script>

<div class="wrap">
    <main>
        <form action="?/updateCategory" method="post" use:enhance={() => {
            return async ({ result }) => {
                await applyAction(result);
                await invalidateAll();
            }
        }}>
            <Input name="name" bgColor="#f1f1f1" label="Name" value={data.category.name} />
            <div class="margin-separator" />
            <DatePicker name="deadline" label="Deadline" value={data.category.deadline} />
            <div class="margin-separator" />
            <h2>Description</h2>
            <Editor name="description" content={data.category.description} placeholder="Description" />
            <div class="margin-separator" />
            <Button value="Update" />
        </form>
    </main>
</div>

<style>
    .wrap {
        display: flex;
        justify-content: center;
    }

    h2 {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 0.5rem;
    }

    main {
        margin: 1rem;
        max-width: 800px;
    }

    .margin-separator {
        margin-bottom: 1rem;
    }
</style>
