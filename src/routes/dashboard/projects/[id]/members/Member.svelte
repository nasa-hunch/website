<script lang="ts">
	import type { ProjectUserPermission } from "$lib/enums";
	import Pfp from "$lib/components/Pfp.svelte"
	import IconButton from "$lib/components/IconButton.svelte";

	//icons
	import MakeViewer from "~icons/mdi/visibility-outline"
	import MakeEditor from "~icons/mdi/edit-outline"
	import MakeUnverified from "~icons/mdi/close"
	import RemoveMember from "~icons/mdi/person-remove-outline"

	type Data = {
		user: {
			firstName: string;
        	lastName: string;
			pfp: string | null
		},
		id: number;
		createdAt: Date;
		updatedAt: Date;
		userId: number;
		projectId: number;
		owner: boolean;
		//this is terrible, but necessary because of a lack of prisma esm support
		permission: unknown;
	}

	

	export let memberData: Data


	const role = memberData.permission as unknown as ProjectUserPermission;
	const titleCasedRole = role.toLowerCase().substring(0, 1).toUpperCase() + role.toLowerCase().substring(1);
</script>

<div class="member">
	<div class="left">
		<Pfp user={memberData.user} size="28px" marginRight="8px"/>
		{memberData.user.firstName} {memberData.user.lastName}
		<div class="role">
			{titleCasedRole}
		</div>

	</div>
	<div class="right">
		<IconButton formData={{action: "?/makeViewer", method: "post"}}>
			<MakeViewer/>
		</IconButton>
		<IconButton>
			<MakeEditor/>
		</IconButton>
		<IconButton>
			<MakeUnverified/>
		</IconButton>
		<IconButton>
			<RemoveMember/>
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
			content: "";
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