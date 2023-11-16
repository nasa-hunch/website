<script lang="ts">
	import type { PageData } from './$types';
    import { Role } from '@prisma/client';
    import Button from '$lib/components/Button.svelte';

	export let data: PageData;
</script>

<main>
    <h1>Projects</h1>

    {#if data.user.role == Role.TEACHER}
        <Button value="Make a new project"/>
    {/if}
</main>

<style>
    main {
        margin: 1rem;
    }
</style>