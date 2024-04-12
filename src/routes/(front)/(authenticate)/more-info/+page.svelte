<script lang="ts">
	import MdiAccountStudent from '~icons/mdi/account-student';
	import MdiShieldAccount from '~icons/mdi/shield-account';
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import InlineButton from '$lib/components/InlineButton.svelte';
	import Input from '$lib/components/Input.svelte';
	import { Role } from '$lib/enums';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="wrap">
	<div class="content">
		{#if data.user.role == null}
			<p>We're still constructing this page.</p>
			<form action="/logout" method="post" use:enhance>
				<Button value="Or Sign Out" />
			</form>
		{/if}
	</div>
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		height: calc(100vh - 100px - 75px);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
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
