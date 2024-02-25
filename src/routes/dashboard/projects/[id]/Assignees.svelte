<script lang="ts">
	type Assignees = {
		projectUser: {
			user: {
				pfp: string | null;
			};
		};
	}[];

	export let assignees: Assignees;
</script>

<div class="wrap">
	{#each assignees as assignee}
		<div class="person">
			<img alt="assignee identifier" src={assignee.projectUser.user.pfp} />
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

		img {
			height: 32px;
			width: 32px;
			max-height: 32px;
			max-width: 32px;
			margin: 0px;
			padding: 0px;
			border-radius: 50%;
		}
	}

	.wrap {
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-left: 10px;
	}
</style>
