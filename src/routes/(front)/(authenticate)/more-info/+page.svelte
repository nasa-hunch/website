<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="wrap">
	<div class="content">
		{#if data.user.role == null}
			<h2>Join with an invite code</h2>
			<form action="?/joinInviteCode" method="post" use:enhance class="joinInviteCode">
				<Input label="Invite Code" name="code" bgColor="#f1f1f1" />
				<div class="margin-separator" />
				<Button type="submit" value="Join" />
			</form>
			<div class="margin-separator" />
			<form action="/logout" method="post" use:enhance>
				<Button value="Or Sign Out" />
			</form>
		{/if}
	</div>
</div>

<style lang="scss">
	.joinInviteCode {
		background-color: $background-alt;
		padding: 1rem;
		border-radius: 0.5rem;
	}

	.wrap {
		width: 100%;
		height: calc(100vh - 100px - 75px);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
	}

	.margin-separator {
		margin-bottom: 1rem;
	}

	.content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
