<script lang="ts">
	import { enhance } from "$app/forms";

	type Assignees = {
		id: number;
		projectUser: {
			id: number,
			user: {
				pfp: string | null;
				firstName: string
				lastName: string
			};
		};
	}[];

	import Pfp from "$lib/components/Pfp.svelte"
	import toast from "svelte-french-toast";
	export let assignees: Assignees;

	export let resolvePromise: (value?: unknown) => void;
	export let rejectPromise: (value?: unknown) => void;

	const assigneeRemoveHelper = () => {
		toast.promise(
			new Promise((resolve, reject) => {
				resolvePromise = resolve;
				rejectPromise = reject;
			}),
			{
				loading: 'Removing assignee',
				success: 'Assignee removed!',
				error: 'Assignee could not be removed'
			}
		);
	};
</script>

<div class="wrap">
	{#each assignees as assignee, i}
	
		<form class="person" style="z-index: {i}" method="post" action="?/removeAssignee" on:submit={assigneeRemoveHelper} use:enhance>
			<input hidden name="assigneeId" value={assignee.id}/>
			<button class="submit">
				<Pfp user={assignee.projectUser.user} marginRight="0px" size="32px"/>
			</button>

			
		</form>
	{/each}
</div>

<style lang="scss">
	.person {
		all: unset;
		height: 32px;
		width: 32px;
		border-radius: 50%;
		margin: 0px;
		padding: 0px;
		margin-left: -16px;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;

	}

	

	.wrap {
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-left: 26px;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;

		&:hover {
			margin-left: 5px;
			.person {
				margin-left: 5px;

				&:hover {
					cursor: pointer;
					opacity: 0.25;
				}
			}
			
		}
	}

	.submit {
		all: unset;
	}
</style>
