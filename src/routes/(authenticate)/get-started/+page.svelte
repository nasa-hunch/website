<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Navbar from '$lib/Navbar.svelte';

	export let form: ActionData;
</script>

<div class="wrap">
	<Navbar />
	<div class="contentWrap">
		<form
			class="content"
			method="post"
			action="?/register"
			use:enhance={() => {
				return async ({ update }) => {
					update({ reset: false });
				};
			}}
		>
			<h1>Register</h1>
			<span class="inputDiv">
				<Input name="firstName" label="First Name" />
			</span>
			<span class="inputDiv">
				<Input name="lastName" label="Last Name" />
			</span>
			<span class="inputDiv">
				<Input name="email" label="Email" type="email" />
			</span>
			<span class="inputDiv">
				<Input name="pass1" label="Password" type="password" />
			</span>
			<span class="inputDiv">
				<Input name="pass2" label="Confirm Password" type="password" />
			</span>
			<span class="inputDiv">
				<Button value="Register" type="submit" />
			</span>
			<p>Already have an account? <a href="/login">Login</a></p>
			{#if form?.success == false}
				<p class="error">Error: {form?.message}</p>
			{/if}
		</form>
	</div>
</div>

<style>
	form {
		background: white;
	}
	.wrap {
		width: 100%;
		height: 100vh;
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
		content: "";
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
