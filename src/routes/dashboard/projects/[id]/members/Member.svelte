<script lang="ts">
	import MakeUnverified from '~icons/mdi/close';
	import MakeEditor from '~icons/mdi/edit-outline';
	import RemoveMember from '~icons/mdi/person-remove-outline';
	// Icons
	import MakeViewer from '~icons/mdi/visibility-outline';
	import IconButton from '$lib/components/IconButton.svelte';
	import Pfp from '$lib/components/Pfp.svelte';
	import type { ProjectUserPermission, Role } from '$lib/enums';
	import { snakeCaseToTitleCase } from '$lib/case';

	type Data = {
		user: {
			firstName: string;
			lastName: string;
			pfp: string | null;
			role: Role
		};
		id: number;
		createdAt: Date;
		updatedAt: Date;
		userId: number;
		projectId: number;
		owner: boolean;
		permission: ProjectUserPermission;
	};

	export let memberData: Data;
	$: role = memberData.permission;
</script>

<div class="member">
	<div class="left">
		<Pfp marginRight="8px" size="28px" user={memberData.user} />
		{memberData.user.firstName}
		{memberData.user.lastName}
		<div class="role">
			{snakeCaseToTitleCase(role)}
		</div>
	</div>
	<div class="right">
		{#if memberData.user.role === 'TEACHER' || memberData.user.role === 'SCHOOL_ADMIN' || memberData.user.role === 'HUNCH_ADMIN'}
			<IconButton formData={{ action: '?/makeViewer', method: 'post' }}>
				<input name="memberId" hidden value={memberData.id} />
				<MakeViewer />
			</IconButton>
			<IconButton formData={{ action: '?/makeEditor', method: 'post' }}>
				<input name="memberId" hidden value={memberData.id} />
				<MakeEditor />
			</IconButton>
			<IconButton formData={{ action: '?/makeNone', method: 'post' }}>
				<input name="memberId" hidden value={memberData.id} />
				<MakeUnverified />
			</IconButton>
			<IconButton formData={{ action: '?/kickMember', method: 'post' }}>
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

	.role {
		margin-left: 10px;
		border: 1px solid $primary;
		position: relative;
		z-index: 2;
		padding: 0px 5px;
		border-radius: 5px;

		&::after {
			content: '';
			position: absolute;
			top: 0px;
			left: 0px;
			width: 100%;
			height: 100%;
			border-radius: 5px;
			background: $primary;
			z-index: -1;
			opacity: 0.25;
		}
	}

	.right {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: end;
	}
</style>
