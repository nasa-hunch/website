<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import toast from 'svelte-french-toast';

	import MdiClipboardCheckOutline from '~icons/mdi/clipboard-check-outline';
	import MdiClipboardRemoveOutline from '~icons/mdi/clipboard-remove-outline';
	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import Pfp from '$lib/components/Pfp.svelte';
	import ProgressGauge from '$lib/components/ProgressGauge.svelte';
	export let data;
	export let form;

	let users: typeof data.project.users;
	$: users = data.project.users;
	let votedYes = 0;
	let percentDone = tweened(0, {
		easing: cubicInOut,
		duration: 1500
	});

	$: if (users) {
		votedYes = 0;
		for (const user of users) {
			if (user.voteSubmit) {
				votedYes++;
			}
		}
	}

	$: percentDone.set(votedYes / users.length);

	$: if (form) {
		if (form.success) {
			toast.success(form.message || 'success!');
		} else {
			toast.error(form.message || 'error!');
		}
	}
</script>

<div class="panels">
	<div class="panel submitInfo">
		<div class="title">
			<h2>Ready to submit?</h2>
		</div>
		<p>
			All group members must vote to submit, then and only then will the submit button be enabled.
			Once a project has been submitted, it will no longer be editable. All submissions are final.
		</p>
		<form action="?/submit" method="post" use:enhance>
			<Button disabled={votedYes != users.length} value="Submit Project" />
		</form>
	</div>

	<div class="panel">
		<div class="title">
			<h2>Vote Status</h2>
			<ProgressGauge fill="var(--green)" percentDone={$percentDone} strokeWidth={4} />
		</div>
		<div class="columns">
			<div class="col">
				{#each users as person}
					<div class="person">
						<Pfp size="32px" user={person.user} />
						{#if data.user.role === 'HUNCH_ADMIN' || data.user.role === 'ORG_ADMIN'}
							<a href="/dashboard/users/{person.user.id}"><p>{person.user.firstName} {person.user.lastName}</p></a>
						{:else}
							<p>{person.user.firstName} {person.user.lastName}</p>
						{/if}
						{#if person.voteSubmit}
							<MdiClipboardCheckOutline class="sicon green" />
						{:else}
							<MdiClipboardRemoveOutline class="sicon red" />
						{/if}
					</div>
				{/each}
			</div>
		</div>
		{#if users.some((user) => user.user.id === data.user.id)}
			<form action="?/voteSubmit" method="post" use:enhance>
				<Button value="Change Vote" />
			</form>
		{/if}
	</div>
</div>

<style lang="scss">
	.panels {
		display: flex;
		flex-direction: row;
		box-sizing: border-box;

		.panel {
			max-width: fit-content;
			padding: 10px;
			box-sizing: border-box;
			border-radius: 10px;
			margin: 20px;
			background: $background-alt;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.submitInfo {
			max-width: 600px;
		}
	}

	p {
		font-size: 1.1rem;
		padding: 0px 10px;
		width: 80%;
	}

	.title {
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;

		h2 {
			margin-right: 10px;
		}
	}

	.columns {
		display: flex;
		flex-direction: row;
		width: 100%;

		.col {
			padding: 10px;
			margin-right: 25px;
			margin-bottom: 10px;
			background: $background-alt;
			flex-grow: 1;

			:global(.sicon) {
				font-size: 30px;
				text-align: right;
			}

			:global(.green) {
				color: $green;
			}

			:global(.red) {
				color: $primary;
			}
		}
	}

	.person {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 5px 0px;

		p {
			margin: 0px;
		}

		a {
			color: black;
		}
	}

	@media (max-width: 1111px) {
		.panels {
			flex-direction: column;

			.panel {
				width: 100%;
			}
		}
	}
</style>
