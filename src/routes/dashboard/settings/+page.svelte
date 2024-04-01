<script lang="ts">
	import toast from 'svelte-french-toast';

	import { enhance } from '$app/forms';
	import { snakeCaseToTitleCase } from '$lib/case';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	export let form;

	let fileBox: HTMLInputElement;
	let fileUploadButton: HTMLButtonElement;

	$: if (form) {
		if (form.success) {
			toast.success(form.message || 'Success!');
		} else {
			toast.error(form.message || 'error.');
		}
	}

	$: titleCasedRole = snakeCaseToTitleCase(data.user.role);

	const dropHandler = (e: DragEvent) => {
		e.preventDefault();
		dragging = false;
		if (!e.dataTransfer) {
			return;
		}
		fileBox.files = e.dataTransfer.files;
		fileUploadButton.click();
	};
	const dragOverHandler = (e: Event) => {
		dragging = true;
		e.preventDefault();
	};

	let dragging = false;

	const stopDragOver = () => {
		dragging = false;
	};
</script>

<form action="?/uploadPfp" enctype="multipart/form-data" hidden method="post" use:enhance>
	<input bind:this={fileBox} name="file" type="file" />
	<button bind:this={fileUploadButton} />
</form>

<main>
	<div class="wrap">
		<h1>Settings</h1>

		<div class="accountInfo">
			<div class="header">
				<h2>Account Information</h2>
				<p class="role">{titleCasedRole}</p>
			</div>
			<div class="content">
				<div class="left">
					<button
						class="pfp"
						class:uploadFileThing={dragging}
						on:drop={dropHandler}
						on:dragover={dragOverHandler}
						on:dragleave={stopDragOver}
					>
						<img alt="Profile" src={data.user.pfp || '/defaultUser.svg'} />
					</button>
				</div>
				<form
					class="right"
					action="?/updateAccountInfo"
					method="post"
					use:enhance={() => {
						return ({ update }) => {
							update({ reset: false });
						};
					}}
				>
					<Input
						name="firstName"
						bgColor="var(--background-alt)"
						label="First Name"
						value={data.user.firstName}
					/>
					<hr />
					<Input
						name="lastName"
						bgColor="var(--background-alt)"
						label="Last Name"
						value={data.user.lastName}
					/>
					<hr />
					<Input
						name="email"
						bgColor="var(--background-alt)"
						label="Email"
						value={data.user.email}
					/>
					<hr />
					<Button value="Save Information" />
				</form>
			</div>
		</div>
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
				content: '';
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

	.pfp {
		all: unset;
		width: 128px;
		height: 128px;
		background: $background;
		border-radius: 50%;
		position: relative;
		margin-right: 25px;

		img {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0px;
			left: 0px;
			border-radius: 50%;
		}
	}

	.uploadFileThing {
		img {
			opacity: 0.5;
		}
	}

	.content {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.left {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
	}

	.right {
		width: 100%;
	}
</style>
