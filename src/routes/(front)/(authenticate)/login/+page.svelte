<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ModelForm from '$lib/components/ModalForm.svelte';

	import type { ActionData } from './$types';
	export let form: ActionData;

	let email = '';
	let password = '';

	$: if (form?.message === 'TOKEN') pushState('', { modal: 'mfa' });
	$: console.log(form?.message);
</script>

<div class="wrap">
	<div class="contentWrap">
		<form
			class="content"
			action="?/login"
			method="post"
			use:enhance={() => {
				return async ({ result }) => {
					await applyAction(result);
				};
			}}
		>
			<h1>Login</h1>
			<span class="inputDiv">
				<Input name="email" label="Email" required bind:value={email} />
			</span>
			<span class="inputDiv">
				<Input name="password" label="Password" required type="password" bind:value={password} />
			</span>
			<span class="inputDiv">
				<Button type="submit" value="Log In" />
			</span>
			<p>No account? <a href="/get-started">Sign Up</a></p>
			{#if form?.success == false}
				{#if form?.message !== 'TOKEN'}
					<p class="error">Error: {form?.message}</p>
				{/if}
			{/if}
		</form>
	</div>
</div>

{#if $page.state.modal === 'mfa'}
	<Modal on:close={() => history.back()}>
		<ModelForm action="?/login" method="post">
			<div class="MFAForm content">
				<h1>Multifactor Authentication</h1>
				<input name="email" type="hidden" value={email} />
				<input name="password" type="hidden" value={password} />
				<span class="inputDiv">
					<Input name="token" label="MFA Code" required type="number" />
				</span>
				<span class="inputDiv">
					<Button type="submit" value="Log In" />
				</span>
			</div>
		</ModelForm>
	</Modal>
{/if}

<style lang="scss">
	form {
		background: white;
	}
	.wrap {
		width: 100%;
		height: calc(100vh - 100px - 75px);
		background: #ffffff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		background-image: url('/cool_space2.jpg');
	}
	.contentWrap {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.75);
		backdrop-filter: blur(3px);
	}
	.content {
		max-width: 350px;
		width: 100%;
		padding: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		transform: scale(0.9);
	}
	.inputDiv {
		margin: 7px;
		width: 100%;
		background: white;
	}
	.error {
		margin: 0px;
		color: red;
	}
	a {
		color: #046b99;
		position: relative;
		text-decoration: none;
	}
	a::after {
		content: '';
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 2px;
		transform: scaleX(0);
		background: #046b99;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
	}
	a:hover::after {
		transform: scaleX(1);
	}
</style>
