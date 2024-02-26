<script lang="ts">
	type Assignees = {
		projectUser: {
			user: {
				pfp: string | null;
				firstName: string
				lastName: string
			};
		};
	}[];

	import Pfp from "$lib/components/Pfp.svelte"
	export let assignees: Assignees;
</script>

<div class="wrap">
	{#each assignees as assignee}
		<div class="person">
			<Pfp user={assignee.projectUser.user} marginRight="0px" size="32px"/>
		</div>
	{/each}
</div>

<style lang="scss">
	.person {
		height: 32px;
		width: 32px;
		border-radius: 50%;
		margin: 0px;
		padding: 0px;
		margin-left: -24px;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;

	}

	

	.wrap {
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-left: 34px;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;

		&:hover {
			margin-left: 5px;
			.person {
				margin-left: 5px;
			}
			
		}
	}
</style>
