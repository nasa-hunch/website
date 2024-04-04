<script lang="ts">
	import type { SubmitFunction } from '@sveltejs/kit';

	import { enhance } from '$app/forms';

	export let enhanceBody: SubmitFunction | undefined = undefined;
	export let method: HTMLFormElement['method'] | undefined;
	export let action: HTMLFormElement['action'] | undefined;
</script>

<form {action} {method} on:submit on:reset use:enhance={enhanceBody}>
	<slot />
</form>

<style lang="scss">
	form {
		width: 100%;
		max-width: 500px;
		padding: 25px;
		border-radius: 5px;
		box-sizing: border-box;
		background: $background;
		text-align: center;
	}
</style>
