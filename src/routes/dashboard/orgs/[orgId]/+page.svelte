<script lang="ts">
	import MdiGear from '~icons/mdi/gear';
	import MdiInvite from '~icons/mdi/invite';
	import { pushState, replaceState } from '$app/navigation';
	import { page } from '$app/stores';
	import { snakeCaseToTitleCase } from '$lib/case.js';
	import Button from '$lib/components/Button.svelte';
	import UserCard from '$lib/components/card/UserCard.svelte';
	import Combobox from '$lib/components/Combobox.svelte';
	import InlineButton from '$lib/components/InlineButton.svelte';
	import Input from '$lib/components/Input.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ModalForm from '$lib/components/ModalForm.svelte';
	import ModalWrap from '$lib/components/ModalWrap.svelte';
	import { Role } from '$lib/enums';

	export let data;
	export let form;

	const roleHeirachy = {
		[Role.HUNCH_ADMIN]: [Role.ORG_ADMIN, Role.TEACHER, Role.STUDENT],
		[Role.ORG_ADMIN]: [Role.ORG_ADMIN, Role.TEACHER, Role.STUDENT],
		[Role.TEACHER]: [Role.STUDENT],
		[Role.STUDENT]: []
	} satisfies Record<Role, Role[]>;

	const roleHeirachyKeys = Object.keys(roleHeirachy) as Role[];

	$: sortedUsers = data.org.users.sort((a, b) => {
		const aRole = (a.role as Role) ?? Role.STUDENT;
		const bRole = (b.role as Role) ?? Role.STUDENT;
		if (roleHeirachyKeys.indexOf(aRole) > roleHeirachyKeys.indexOf(bRole)) {
			return 1;
		} else if (roleHeirachyKeys.indexOf(aRole) < roleHeirachyKeys.indexOf(bRole)) {
			return -1;
		} else {
			return 0;
		}
	});

	function openOrgSettings() {
		pushState('', {
			modal: 'orgSettings'
		});
	}

	function openInviteModal() {
		pushState('', {
			modal: 'invite'
		});
	}

	let selectedRole = 'unknown';
</script>

<main>
	<div class="title">
		<h1>{data.org.name}</h1>
		<button class="icon gear" on:click={openOrgSettings}>
			<MdiGear height="2rem" width="2rem" />
		</button>
		{#if roleHeirachy[data.user.role].length > 0}
			<button class="icon" on:click={openInviteModal}>
				<MdiInvite height="2rem" width="2rem" />
			</button>
		{/if}
	</div>

	{#if data.org.projects.length > 0}
		<h2>Projects</h2>
		<div class="projects">
			{#each data.org.projects as project}
				<a class="project" href="/dashboard/projects/{project.id}">
					<h2>{project.projectTemplate.name.substring(0, 36)}{project.projectTemplate.name.length > 36 ? "..." : ""}</h2>
					{#if project.submitted}
						<div class="submitted">Submitted</div>
					{/if}
					<p>
						{project.users.map(({ user }) => `${user.firstName} ${user.lastName}`).join(', ')}
					</p>
				</a>
			{/each}
		</div>
	{/if}

	{#if data.org.users.length > 0}
		<h2>Users</h2>

		<div class="users">
			{#each sortedUsers as user}
				<UserCard {user} />
			{/each}
		</div>
	{:else}
		<p>This organization has no users. <InlineButton value="Add an administrator" /></p>
	{/if}
</main>

{#if $page.state.modal === 'orgSettings'}
	<Modal on:close={() => history.back()}>
		<ModalForm action="?/update" method="POST">
			<h2>Organization Settings</h2>
			<Input name="name" label="Name" value={data.org.name} />
			<div class="margin-separator" />
			<Button type="submit" value="Save" />
		</ModalForm>
	</Modal>
{/if}

{#if $page.state.modal === 'invite'}
	<Modal on:close={() => history.back()}>
		<ModalForm
			action="?/generateInvite"
			enhanceBody={() => {
				return async ({ update }) => {
					await update();
					replaceState('', {
						modal: 'inviteSent'
					});
				};
			}}
			method="POST"
		>
			<h2>Invite User</h2>
			<Combobox
				name="role"
				label="Select Role"
				options={[
					roleHeirachy[data.user.role],
					(role) => snakeCaseToTitleCase(role),
					(role) => role
				]}
				bind:value={selectedRole}
			/>
			{#if selectedRole === 'STUDENT'}
				<div class="margin-separator" />
				<Combobox
					name="projectId"
					label="Project"
					options={[
						data.org.projects,
						(project) => project.projectTemplate.name,
						(project) => project.id
					]}
				/>
			{/if}
			<div class="margin-separator" />
			<Button type="submit" value="Invite" />
		</ModalForm>
	</Modal>
{/if}

{#if $page.state.modal === 'inviteSent'}
	<Modal on:close={() => history.back()}>
		<ModalWrap>
			{#if form && form.invite}
				<h2>Invite Generated</h2>
				<p>An invite has generated.</p>
				<p>Code: {form.invite.joinCode}</p>
				<p>
					Link: <a href="/invite/{form.invite.joinCode}">
						{location.origin}/invite/{form.invite.joinCode}
					</a>
				</p>
			{:else}
				<p>Waiting for server response.</p>
			{/if}
		</ModalWrap>
	</Modal>
{/if}

<style lang="scss">
	.margin-separator {
		margin: 1rem 0;
	}

	.title {
		display: flex;
		align-items: center;
		gap: 1rem;

		.icon {
			background-color: transparent;
			border: none;
			margin: 0;
			padding: 0;
			width: 2rem;
			height: 2rem;
			cursor: pointer;
		}

		.gear {
			transform: rotate(0deg);
			transition: 0.2s all cubic-bezier(0.075, 0.82, 0.165, 1);
			&:hover {
				transform: rotate(45deg);
			}
		}
	}

	main {
		margin: 1rem;
	}

	.users {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}

	.project {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 1rem;
		border-radius: 0.5rem;
		background-color: $background-alt;
		color: black;
		transition: 0.2s all cubic-bezier(0.075, 0.82, 0.165, 1);

		&:hover {
			background-color: $background2;
		}

		.submitted {
			background-color: #2e7d32;
			color: white;
			padding: 0.25rem 0.5rem;
			border-radius: 0.25rem;
		}
	}

	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}

	.project {
		flex-direction: column;
		justify-content: space-between;
		align-items: start;
		text-decoration: underline;
	}
	
</style>
