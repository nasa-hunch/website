<script lang="ts">
	import MakeUnverified from '~icons/mdi/close';
	import MakeEditor from '~icons/mdi/edit-outline';
	import RemoveMember from '~icons/mdi/person-remove-outline';
	// Icons
	import MakeViewer from '~icons/mdi/visibility-outline';
	import IconButton from '$lib/components/IconButton.svelte';
	import Pfp from '$lib/components/Pfp.svelte';
	import type { ProjectUserPermission } from '$lib/enums';

	type Data = {
		user: {
			firstName: string;
			lastName: string;
			pfp: string | null;
		};
		id: number;
		createdAt: Date;
		updatedAt: Date;
		userId: number;
		projectId: number;
		owner: boolean;
		// This is terrible, but necessary because of a lack of prisma esm support
		permission: unknown;
	};

	export let memberData: Data;
	let role = memberData.permission as unknown as ProjectUserPermission;
	$: role = memberData.permission as unknown as ProjectUserPermission;
	let titleCasedRole: string;
	$: titleCasedRole =
		role.toLowerCase().substring(0, 1).toUpperCase() + role.toLowerCase().substring(1);
</script>

<div class="member">
	<div class="left">
		<Pfp marginRight="8px" size="28px" user={memberData.user} />
		{memberData.user.firstName}
		{memberData.user.lastName}
		<div class="role">
			{titleCasedRole}
		</div>
	</div>
	<div class="right">
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
