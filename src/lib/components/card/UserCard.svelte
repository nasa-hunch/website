<script lang="ts">
    import { snakeCaseToTitleCase } from '$lib/case.js';
    import Pfp from '$lib/components/Pfp.svelte';

    interface UserLike {
        id: string;
        firstName: string;
        lastName: string;
        pfp: string | null;
        role: string | null;
    }

    export let user: UserLike;
</script>

<a class="user" href="/dashboard/users/{user.id}">
    <Pfp size="50px" {user} />
    <div class="content">
        <p>{user.firstName} {user.lastName}</p>
        {#if user.role && user.role !== 'STUDENT'}
            <p class="role">{snakeCaseToTitleCase(user.role)}</p>
        {/if}
    </div>
</a>

<style lang="scss">
    .role {
		display: inline-block;
		padding: 0.25rem 0.5rem;
		margin: 0;
		font-size: 0.8rem;
		color: var(--text-alt);
		background-color: rgba(221, 54, 28, 0.25);
		border: 1px solid #dd361c;
	}

    .user {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		border-radius: 0.5rem;
		background-color: $background-alt;
		color: black;
		transition: 0.2s all cubic-bezier(0.075, 0.82, 0.165, 1);

		&:hover {
			background-color: $background2;
		}
	}
</style>
