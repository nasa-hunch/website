<script lang="ts">
	import { enhance } from '$app/forms';
	import { snakeCaseToTitleCase } from '$lib/case';
    import Button from '$lib/components/Button.svelte';

    export let data;
</script>

<main>
    {#if data.invite.to}
        <p>Filling out a form</p>
    {:else}
        <h1>
            <span class="accent">{data.invite.from.firstName} {data.invite.from.lastName}</span> 
            wishes to invite you
            {#if data.invite.organization}
                to <span class="accent">{data.invite.organization.name}</span>
            {/if}
            as a <span class="accent">{snakeCaseToTitleCase(data.invite.role)}</span>
        </h1>
        <div class="buttons">
            <form method="POST" use:enhance action="?/acceptInvite">
                <Button value="Accept" />
            </form>
            <Button value="Back" on:click={() => history.back()} />
        </div>
    {/if}
</main>

<style lang="scss">
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    h1 {
        font-size: 2rem;
        text-align: center;
    }

    .buttons {
        display: flex;
        gap: 1rem;
    }

    .accent {
        color: $primary;
    }
</style>
