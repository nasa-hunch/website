<script lang="ts">
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import Editor from '$lib/components/Editor.svelte';
	import Input from '$lib/components/Input.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ModalForm from '$lib/components/ModalForm.svelte';
	import Pfp from '$lib/components/Pfp.svelte';

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
		<Pfp size="100px" {user} />
		<h1>{user.firstName} {user.lastName}</h1>
		<h2>{user.email}</h2>
	</div>
	<div class="info">
		<h2>Information</h2>
		<p>Created: {user.createdAt.toLocaleString()}</p>
	</div>
	<div class="actions">
		<h2>Actions</h2>
		{#if data.user.role === 'ORG_ADMIN' || data.user.role === 'HUNCH_ADMIN' || data.user.role === 'TEACHER'}
			<Button value="Send Notification" on:click={sendNotificationModal} />
			<div class="margin-separator" />
		{/if}

		{#if data.user.role === 'ORG_ADMIN' || data.user.role === 'HUNCH_ADMIN'}
			<Button value="Update User" on:click={updateUserModal} />
			<div class="margin-separator" />
		{/if}

		{#if data.user.role === 'HUNCH_ADMIN'}
			<Button value="Change Password" on:click={changePasswordModal} />
		{/if}
	</div>
	{#if user.projectUser.length > 0}
		<div class="projects">
			<h2>Projects</h2>
			{#each user.projectUser as projectUser}
				<a
					class="project"
					class:submitted={projectUser.project.submitted}
					href="/dashboard/projects/{projectUser.project.id}"
				>
					<h3>
						{projectUser.project.projectTemplate.name.substring(0, 25)}
						{projectUser.project.projectTemplate.name.length > 25 ? '...' : ''}
					</h3>
					<div class="projectFooter">
						<div class="avatars">
							{#each projectUser.project.users
								.filter((user) => user.user.id !== data.selectedUser.id)
								.map((user) => user.user) as user}
								<Pfp size="32px" {user} />
							{/each}
						</div>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</main>

{#if $page.state.modal === 'sendNotification'}
	<Modal on:close={() => history.back()}>
		<ModalForm action="?/sendNotification" method="POST">
			<h1>Send Notification</h1>
			<Input name="title" label="Title" required />
			<div class="margin-separator" />
			<Editor name="message" placeholder="Enter message..." />
			<div class="margin-separator" />
			<Button type="submit" value="Send" />
		</ModalForm>
	</Modal>
{/if}

{#if $page.state.modal === 'updateUser'}
	<Modal on:close={() => history.back()}>
		<ModalForm action="?/updateUser" method="POST">
			<h1>Update User</h1>
			<Input name="firstName" label="First Name" required value={user.firstName} />
			<div class="margin-separator" />
			<Input name="lastName" label="Last Name" required value={user.lastName} />
			<div class="margin-separator" />
			<Input name="email" label="Email" required value={user.email} />
			<div class="margin-separator" />
			<Button type="submit" value="Update" />
		</ModalForm>
	</Modal>
{/if}

{#if $page.state.modal === 'changePassword'}
	<Modal on:close={() => history.back()}>
		<ModalForm action="?/changePassword" method="POST">
			<h1>Change Password</h1>
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

	.info {
		margin-top: 1rem;
		padding: 1rem;
		border-radius: 0.5rem;
		background-color: $background-alt;
		color: black;
	}

	.projects {
		margin-top: 1rem;
	}

	.project {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		border-radius: 0.5rem;
		background-color: $background-alt;
		color: black;
		text-decoration: none;
		transition: background-color 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

		&:hover {
			background-color: darken($background-alt, 10%);
		}
	}
</style>
