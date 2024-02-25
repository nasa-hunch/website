<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
import type { PageData } from './$types';
	import toast from 'svelte-french-toast';
	import { enhance } from '$app/forms';

	export let data: PageData;
	export let form;

	$: if(form) {
		if(form.success) {
			toast.success(form.message || "Success!")
		} else {
			toast.error(form.message || "error.")
		}
	}

	$: titleCasedRole =
		data.user.role.toLowerCase().substring(0, 1).toUpperCase() +
		data.user.role.toLowerCase().substring(1);
</script>

<main>
	<div class="wrap">
		<h1>Settings</h1>

		<form class="accountInfo" action="?/updateAccountInfo" method="post" use:enhance={() => {
			return ({ update }) => {
				update({ reset: false });
			};
		}}>
			<div class="header">
				<h2>Account Information</h2> <p class="role">{titleCasedRole}</p>
			</div>
			

			<Input value={data.user.firstName} label="First Name" name="firstName" bgColor="var(--background-alt)"/>
			<hr>
			<Input value={data.user.lastName} label="Last Name" name="lastName" bgColor="var(--background-alt)"/>
			<hr>
			<Input value={data.user.email} label="Email" name="email" bgColor="var(--background-alt)"/>
			<hr>
			<Button value="Save Information"/>
			

		</form>
	

		
	</div>
	
</main>

<style lang="scss">
	.wrap {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.accountInfo {
		width: 90%;
		max-width: 600px;
		background: $background-alt;
		padding: 25px;
		box-sizing: border-box;
		border-radius: 10px;
	}

	hr {
		border: transparent;
	}
	.header {
		display: flex;
		flex-direction: row;
		align-items: center;

		.role {
			margin-left: 10px;
			position: relative;
			padding: 3px 5px;
			z-index: 2;
			border: 1px solid $secondary;
			border-radius: 3px;

			&::after {
				content: "";
				top: 0px;
				left: 0px;
				height: 100%;
				width: 100%;
				position: absolute;
				background: $secondary;
				z-index: -1;
				opacity: 0.25;
				border-radius: 3px;
			}
		}

		
	}
</style>
