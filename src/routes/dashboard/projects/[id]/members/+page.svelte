<script lang="ts">
	import toast from 'svelte-french-toast';

	import AddUserIcon from '~icons/mdi/person-add-outline';
	import IconButton from '$lib/components/IconButton.svelte';
	import ModelForm from '$lib/components/ModelForm.svelte';
	import ModelHelper from '$lib/components/ModelHelper.svelte';
	import TextButton from '$lib/components/TextButton.svelte';

	import Member from './Member.svelte';

	let showingInvite = false;
	export let data;

	const copyCode = async () => {
		try {
			await window.navigator.clipboard.writeText(data.project.joinCode.toString());
			toast.success('Code copied!');
		} catch (e) {
			toast.error('Could not copy code.');
		}
	};
</script>

<ModelHelper bind:visible={showingInvite}>
	<ModelForm action="?/refreshCode" method="post">
		<div class="inviteCode">
			<p>Send project invite:</p>
			<span class="projectCode"
				><input disabled value={data.project.joinCode} />
				<button type="button" on:click={copyCode}>Copy</button></span
			>
			<p>You may also<TextButton type="submit">refresh your join code</TextButton></p>
		</div>
	</ModelForm>
</ModelHelper>

<div class="wrap">
	<div class="title">
		<h2>Members</h2>
		<IconButton
			on:click={() => {
				showingInvite = true;
			}}
		>
			<AddUserIcon />
		</IconButton>
	</div>
	<div class="members">
		{#each data.project.users as member}
			<Member memberData={member} />
		{/each}
	</div>
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		height: 100%;
	}

	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 20px;
		height: 35px;

		h2 {
			margin: 0px;
			margin-right: 10px;
		}
	}

	.inviteCode {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
	}

	.projectCode {
		padding: 5px;
		font-size: 1.2rem;
		background: $background-alt;
		width: 100%;
		border-radius: 5px;
		text-align: left;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		cursor: text;

		input {
			all: unset;
		}

		button {
			all: unset;
			cursor: pointer;
			height: 90%;
			padding: 5px;
			font-size: 1rem;
			box-sizing: border-box;
			background: $background2;
			border-radius: 5px;

			&:hover {
				background: $background3;
			}
		}
	}
</style>
