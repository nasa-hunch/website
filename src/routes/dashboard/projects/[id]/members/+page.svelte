<script lang="ts">
	import toast from 'svelte-french-toast';

	import AddUserIcon from '~icons/mdi/person-add-outline';
	import { invalidateAll, pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import IconButton from '$lib/components/IconButton.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ModalForm from '$lib/components/ModalForm.svelte';
	import ModalWrap from '$lib/components/ModalWrap.svelte';
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

	const copyCode = (code: string) => async () => {
		try {
			await window.navigator.clipboard.writeText(code);
			toast.success('Code copied!');
		} catch (e) {
			toast.error('Could not copy code.');
		}
	};
</script>

{#if $page.state.modal === 'inviteSent'}
	<Modal on:close={() => history.back()}>
		<ModalWrap>
			{#if form?.invite}
				<p>Send project invite:</p>
				<span class="projectCode"
					><input disabled value={form.invite.joinCode} />
					<button type="button" on:click={copyCode(form.invite.joinCode)}>Copy</button></span
				>
			{:else}
				<p>Odd.. form not found. Try again.</p>
			{/if}
		</ModalWrap>
	</Modal>
{/if}

<div class="wrap">
	<div class="title">
		<h2>Members</h2>
		<IconButton
			enhanceBody={() => {
				return async ({ update }) => {
					await update({ invalidateAll: false });
					pushState('', {
						modal: 'inviteSent'
					});
				};
			}}
			formData={{
				method: 'POST',
				action: '?/invite'
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

	.buttons {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		gap: 1rem;
	}
</style>
