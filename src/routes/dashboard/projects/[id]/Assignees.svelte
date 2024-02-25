<script lang="ts">
	type Assignees = {
		projectUser: {
				user: {
					pfp: string | null;
				};
			}
		}[]

	export let assignees: Assignees;
</script>


<div class="wrap">
	{#each assignees as assignee}
		<div class="person">
			<img src={assignee.projectUser.user.pfp} alt="assignee identifier"/>
		</div>
	{/each}
</div>

<style lang="scss">
	.person {
		height: 32px;
		width: 32px;
		border-radius: 50%;

		img {
			height: 32px;
			width: 32px;
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