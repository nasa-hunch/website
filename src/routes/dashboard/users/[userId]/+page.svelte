<script lang="ts">
	import Pfp from '$lib/components/Pfp.svelte';
	import Button from '$lib/components/Button.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ModalForm from '$lib/components/ModalForm.svelte';
	import Input from '$lib/components/Input.svelte';
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';

	export let data;

	$: user = data.selectedUser;

	function sendNotificationModal() {
		pushState('', {
			modal: 'sendNotification'
		});
	}

	function updateUserModal() {
		pushState('', {
			modal: 'updateUser'
		});
	}

	function changePasswordModal() {
		pushState('', {
			modal: 'changePassword'
		});
	}
</script>

<main>
	<div class="title">
		<Pfp {user} size="100px" />
		<h1>{user.firstName} {user.lastName}</h1>
		<h2>{user.email}</h2>
	</div>
	<div class="info">
		<h2>Information</h2>
		<p>Created: {user.createdAt.toLocaleString()}</p>
	</div>
	<div class="actions">
		<h2>Actions</h2>
		{#if data.user.role === 'SCHOOL_ADMIN' || data.user.role === 'HUNCH_ADMIN'}
			<Button on:click={sendNotificationModal} value="Send Notification" />
			<div class="margin-separator" />
			<Button on:click={updateUserModal} value="Update User" />
		{/if}
		<div class="margin-separator" />
		{#if data.user.role === 'HUNCH_ADMIN'}
			<Button on:click={changePasswordModal} value="Change Password" />
		{/if}
	</div>
</main>

{#if $page.state.modal === 'sendNotification'}
	<Modal on:close={() => history.back()}>
		<ModalForm method="POST" action="?/sendNotification">
			<h1>Send Notification</h1>
			<label>
				<span>Message</span>
				<textarea name="message" required />
			</label>
			<Button type="submit" value="Send" />
		</ModalForm>
	</Modal>
{/if}

{#if $page.state.modal === 'updateUser'}
	<Modal on:close={() => history.back()}>
		<ModalForm method="POST" action="?/updateUser">
			<h1>Update User</h1>
			<Input name="firstName" label="First Name" value={user.firstName} required />
			<div class="margin-separator" />
			<Input name="lastName" label="Last Name" value={user.lastName} required />
			<div class="margin-separator" />
			<Input name="email" label="Email" value={user.email} required />
			<div class="margin-separator" />
			<Button type="submit" value="Update" />
		</ModalForm>
	</Modal>
{/if}

{#if $page.state.modal === 'changePassword'}
	<Modal on:close={() => history.back()}>
		<ModalForm method="POST" action="?/changePassword">
			<h1>Change Password</h1>
			<Input
				autocomplete="new-password"
				type="password"
				name="password"
				label="Password"
				required
			/>
			<div class="margin-separator" />
			<Input type="password" name="confirmPassword" label="Confirm Password" required />
			<div class="margin-separator" />
			<Button type="submit" value="Change" />
		</ModalForm>
	</Modal>
{/if}

<style lang="scss">
	main {
		margin: 1rem;
	}

	div.margin-separator {
		margin-top: 1rem;
	}

	div.actions {
		max-width: 20rem;
	}

	.title {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		border-radius: 0.5rem;
		background-color: var(--background-alt);
		color: black;
	}
</style>
