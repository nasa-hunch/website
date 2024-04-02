<script lang="ts">
	import toast from 'svelte-french-toast';

	import AddUserIcon from '~icons/mdi/person-add-outline';
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import IconButton from '$lib/components/IconButton.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ModelForm from '$lib/components/ModalForm.svelte';
	import TextButton from '$lib/components/TextButton.svelte';

	import Member from './Member.svelte';

	export let form;

	$: if (form) {
		if (form.success) {
			toast.success(form.message || 'success');
		} else {
			toast.error(form.message || 'error!');
		}
	}

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

{#if $page.state.modal === 'invite'}
	<Modal on:close={() => history.back()}>
		<ModelForm action="?/refreshCode" method="post">
			<div class="inviteCode">
				<p>Send project invite:</p>
				<span class="projectCode"
					><input disabled value={data.project.joinCode} />
					<button type="button" on:click={copyCode}>Copy</button></span
				>
				{#if data.user.role === 'TEACHER'}
					<p>You may also<TextButton type="submit">refresh your join code</TextButton></p>
				{/if}
			</div>
		</ModelForm>
	</Modal>
{/if}

<div class="wrap">
	<div class="title">
		<h2>Members</h2>
		<IconButton
			on:click={() => {
				pushState('', {
					modal: 'invite'
				});
			}}
		>
			<AddUserIcon />
		</IconButton>
	</div>
	<div class="members">
		{#each data.project.users as member}
			<Member bind:memberData={member} bind:userRole={data.user.role} />
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
