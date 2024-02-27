<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import toast from 'svelte-french-toast';

	import { enhance } from '$app/forms';
	import Button from '$lib/components/Button.svelte';
	import Pfp from '$lib/components/Pfp.svelte';
	import ProgressGauge from '$lib/components/ProgressGauge.svelte';
	export let data;
	export let form;

	let users: typeof data.project.users;
	$: users = data.project.users;
	let votedYes: typeof users = [];
	let votedNo: typeof users = [];

	let percentDone = tweened(0, {
		easing: cubicInOut,
		duration: 1500
	});

	$: if (users) {
		votedYes = [];
		votedNo = [];
		users.forEach((item) => {
			if (item.voteSubmit) {
				votedYes.push(item);
			} else {
				votedNo.push(item);
			}
		});
	}

	$: percentDone.set(votedYes.length / users.length);

	$: if (form) {
		if (form.success) {
			toast.success(form.message || 'success!');
		} else {
			toast.error(form.message || 'error!');
		}
	}
</script>

<div class="panels">
	<div class="panel">
		<div class="title">
			<h2>Ready to submit?</h2>
		</div>
		<p>
			All group members must vote to submit, then and only then will the submit button be enabled.
		</p>
	</div>

	<div class="panel">
		<div class="title">
			<h2>Vote Status</h2>
			<ProgressGauge fill="var(--green)" percentDone={$percentDone} strokeWidth={4} />
		</div>
		<div class="columns">
			<div class="left col">
				<h2>Voted Yes</h2>
				{#each votedYes as person}
					<div class="person">
						<Pfp size="32px" user={person.user} />
						<p>{person.user.firstName} {person.user.lastName}</p>
					</div>
				{/each}
			</div>
			<div class="right col">
				<h2>Voted No</h2>
				{#each votedNo as person}
					<div class="person">
						<Pfp size="32px" user={person.user} />
						<p>{person.user.firstName} {person.user.lastName}</p>
					</div>
				{/each}
			</div>
		</div>
		<form action="?/voteSubmit" method="post" use:enhance>
			<Button value="Vote Submit" />
		</form>
	</div>
</div>

<style lang="scss">
	.panels {
		display: flex;
		flex-direction: row;

		.panel {
			min-width: 300px;
			width: calc(33% - 40px);
			padding: 10px;
			box-sizing: border-box;
			border-radius: 10px;
			flex-grow: 1;
			margin: 20px;
			background: $background-alt;
			display: flex;
			flex-direction: column;
			align-items: center;
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

	.voteStatus {
		display: flex;
		flex-direction: column;
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

			h2 {
				font-size: 1.2rem;
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
	}
</style>
