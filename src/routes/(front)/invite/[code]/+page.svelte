<script lang="ts">
	import { enhance } from '$app/forms';
	import { snakeCaseToTitleCase } from '$lib/case';
	import Button from '$lib/components/Button.svelte';

	export let data;
</script>

<main>
	{#if data.invite.to}
		<form action="?/submitForm" method="POST">
			{#if data.invite.role === 'ORG_ADMIN'}
				<p>Filling out a form</p>
			{:else if data.invite.role === 'TEACHER'}
				<p>Filling out a form</p>
			{:else}
				<p>Something has gone wrong. Please contact an administrator</p>
				<p>Expected a non-student or non-hunch admin role, instead got {data.invite.role}</p>
			{/if}
		</form>
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
			<form action="?/acceptInvite" method="POST" use:enhance>
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
