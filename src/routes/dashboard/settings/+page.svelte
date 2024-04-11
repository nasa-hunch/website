<script lang="ts">
	import { renderSVG } from 'scannable/qr';
	import toast from 'svelte-french-toast';

	import { enhance } from '$app/forms';
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import { snakeCaseToTitleCase } from '$lib/case';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ModalForm from '$lib/components/ModalForm.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	export let form;

	let svgHTML = renderSVG({
		value: `otpauth://totp/NASA%20Hunch?secret=${data.user.secret}`,
		width: 200,
		height: 200
	});

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

	const changePasswordModal = () => {
		pushState('', {
			modal: 'changePassword'
		});
	};

	const enableMFAModal = () => {
		pushState('', {
			modal: 'enableMFA'
		});
	};

	const disableMFAModal = () => {
		pushState('', {
			modal: 'disableMFA'
		});
	};
</script>

<form action="?/uploadPfp" enctype="multipart/form-data" hidden method="post" use:enhance>
	<input bind:this={fileBox} name="file" type="file" />
	<button bind:this={fileUploadButton} />
</form>

<main>
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
				<Input name="email" bgColor="var(--background-alt)" label="Email" value={data.user.email} />
				<hr />
				<Button value="Save Information" />
			</form>
		</div>
	</div>

	<div class="accountInfo m-top">
		<div class="header">
			<h2>Actions</h2>
		</div>
		<form action="/logout" method="POST">
			<Button value="Log Out" />
		</form>
		<hr />
		<Button value="Change Password" on:click={changePasswordModal} />
		<hr />
		{#if data.user.mfa}
			<Button value="Disable MFA" on:click={disableMFAModal} />
		{:else}
			<Button value="Enable MFA" on:click={enableMFAModal} />
		{/if}
	</div>

	<div class="accountInfo m-top">
		<div class="header">
			<h2>Sessions</h2>
		</div>
		{#each data.user.sessions as session}
			<p>
				{session.ip} at {session.createdAt.toLocaleString()}
				{#if session.sessionText === 'current'}
					(Current Session)
				{/if}
			</p>
		{/each}
	</div>
</main>

{#if $page.state.modal === 'changePassword'}
	<Modal on:close={() => history.back()}>
		<ModalForm action="?/changePassword" method="POST">
			<h1>Change Password</h1>
			<Input name="oldPassword" label="Old Password" required type="password" />
			<div class="margin-separator" />
			<Input
				name="password"
				autocomplete="new-password"
				label="Password"
				required
				type="password"
			/>
			<div class="margin-separator" />
			<Input name="confirmPassword" label="Confirm Password" required type="password" />
			<div class="margin-separator" />
			<Button type="submit" value="Change" />
		</ModalForm>
	</Modal>
{:else if $page.state.modal === 'enableMFA'}
	<Modal on:close={() => history.back()}>
		<ModalForm action="?/enableMFA" method="POST">
			<h1>Enable Multifactor Authentication</h1>
			{@html svgHTML}
			<div class="margin-separator" />

			<form action="?/confirmMFA" method="POST">
				<Input name="token" label="Code" required type="text" />
				<div class="margin-separator" />

				<Button type="submit" value="Confirm Code" />
			</form>
		</ModalForm>
	</Modal>
{:else if $page.state.modal === 'disableMFA'}
	<Modal on:close={() => history.back()}>
		<ModalForm action="?/enableMFA" method="POST">
			<h1>Disable Multifactor Authentication</h1>
			<div class="margin-separator" />
			<form action="?/disableMFA" method="POST">
				<Input name="password" label="Password" required type="password" />
				<div class="margin-separator" />
				<Button type="submit" value="Disable MFA" />
			</form>
		</ModalForm>
	</Modal>
{/if}

<style lang="scss">
	.margin-separator {
		margin-top: 1rem;
	}

	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.m-top {
		margin-top: 2rem;
	}

	.accountInfo {
		width: 90%;
		max-width: 600px;
		background: $background-alt;
		padding: 2rem;
		padding-top: 0rem;
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

		h2 {
			padding: 3px 0;
		}

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
