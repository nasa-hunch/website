<script lang="ts">

	import type { ActionData } from './$types';

	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Navbar from '$lib/Navbar.svelte';
	export let form: ActionData;
	
</script>

<div class="wrap">
	<Navbar />
	<div class="contentWrap">
		<form class="content" method="post" action="?/register">
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
		background-image: url('cool_space.jpg');
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
</style>
