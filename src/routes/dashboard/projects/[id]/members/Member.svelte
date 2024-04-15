<script lang="ts">
	import MakeUnverified from '~icons/mdi/close';
	import MakeEditor from '~icons/mdi/edit-outline';
	import RemoveMember from '~icons/mdi/person-remove-outline';
	import { tooltip } from '@svelte-plugins/tooltips';

	import MakeViewer from '~icons/mdi/visibility-outline';
	import { snakeCaseToTitleCase } from '$lib/case';
	import IconButton from '$lib/components/IconButton.svelte';
	import Pfp from '$lib/components/Pfp.svelte';
	import type { ProjectUserPermissionString, RoleString } from '$lib/enums';

	type Data = {
		user: {
			firstName: string;
			lastName: string;
			pfp: string | null;
			role: RoleString | null;
		};
		id: string;
		createdAt: Date;
		updatedAt: Date;
		userId: string;
		projectId: string;
		owner: boolean;
		permission: ProjectUserPermissionString;
	};

	export let memberData: Data;
	export let userRole: RoleString;
	$: role = memberData.permission;
</script>

<div class="member">
	<div class="left">
		<Pfp marginRight="8px" size="28px" user={memberData.user} />
		{#if userRole === 'ORG_ADMIN' || userRole === 'HUNCH_ADMIN'}
			<a href="/dashboard/users/{memberData.userId}"
				>{memberData.user.firstName} {memberData.user.lastName}</a
			>
		{:else}
			{memberData.user.firstName} {memberData.user.lastName}
		{/if}
		<div class="role">
			{snakeCaseToTitleCase(role)}
		</div>
		{#if memberData.user.role === 'TEACHER'}
			<div class="teacher">Teacher</div>
		{/if}
	</div>
	<div class="right">
		{#if userRole === 'TEACHER'}
			<IconButton tooltip="Make Viewer">
				<input name="memberId" hidden value={memberData.id} />
				<MakeViewer />
			</IconButton>
			<IconButton tooltip="Make Editor" formData={{ action: '?/makeEditor', method: 'post' }}>
				<input name="memberId" hidden value={memberData.id} />
				<MakeEditor />
			</IconButton>
			<IconButton tooltip="Make Unverified" formData={{ action: '?/makeNone', method: 'post' }}>
				<input name="memberId" hidden value={memberData.id} />
				<MakeUnverified />
			</IconButton>
			<IconButton tooltip="Remove Member" formData={{ action: '?/kickMember', method: 'post' }}>
				<input name="memberId" hidden value={memberData.id} />
				<RemoveMember />
			</IconButton>
		{/if}
	</div>
</div>

<style lang="scss">
	.member {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 1.1rem;
		padding: 10px;
		box-sizing: border-box;
		background: $background-alt;
		border-radius: 5px;
		margin-top: 10px;
	}

	.left {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.role,
	.teacher {
		margin-left: 10px;
		position: relative;
		z-index: 2;
		padding: 0px 5px;
		border-radius: 5px;
	}

	.role {
		border: 1px solid $primary;
		background-color: rgba($primary, 0.25);
	}

	.teacher {
		border: 1px solid $secondary;
		background-color: rgba($secondary, 0.25);
	}

	.right {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: end;
	}

	a {
		color: black;
	}
</style>
