<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import toast from 'svelte-french-toast';

	import AddItemIcon from '~icons/mdi/plus';
	import Button from '$lib/components/Button.svelte';
	import IconButton from '$lib/components/IconButton.svelte';
	import Input from '$lib/components/Input.svelte';
	import ModelForm from '$lib/components/ModalForm.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ProgressGauge from '$lib/components/ProgressGauge.svelte';

	import type { PageData } from './$types';
	import CheckListItem from './CheckListItem.svelte';
	import { pushState, replaceState } from '$app/navigation';
	import { page } from '$app/stores';

	export let data: PageData;
	export let form;

	let percentDone = tweened(0, {
		duration: 1000,
		easing: cubicInOut
	});

	$: if (percentDone) {
		if (data.numberOfItems == 0) {
			percentDone.set(1);
		} else {
			percentDone.set(data.checkedItems.length / data.numberOfItems);
		}
	}

	let resolvePromise: (value?: unknown) => void, rejectPromise: (value?: unknown) => void;
	let generalPromise = new Promise((resolve, reject) => {
		resolvePromise = resolve;
		rejectPromise = reject;
	});

	const resetPromise = () => {
		generalPromise = new Promise((resolve, reject) => {
			resolvePromise = resolve;
			rejectPromise = reject;
		});
	};

	$: if (form) {
		if (form.success) {
			resolvePromise();
		} else {
			rejectPromise();
		}
		replaceState('', {
			modal: null
		})
		form = null;
	}

	const submitNewItem = () => {
		resetPromise();
		toast.promise(generalPromise, {
			loading: 'Creating Item',
			success: 'Item created!',
			error: 'Item could not be created.'
		});
	};
</script>

{#if $page.state.modal === 'createItem'}
	<Modal on:close={() => history.back()}>
		<ModelForm action="?/createItem" method="post" on:submit={submitNewItem}>
			<h2>Creating Item</h2>
			<Input name="name" label="Name" />
			<hr />
			<Button value="Create" />
		</ModelForm>
	</Modal>
{/if}

<main>
	<div class="title">
		<div class="progress">
			<ProgressGauge fill="var(--green)" percentDone={$percentDone} strokeWidth={4} />
		</div>
		<h1>Check List</h1>
		<div class="iconButtonWrap">
			<IconButton
				on:click={() => {
					pushState('', {
						modal: 'createItem'
					});
				}}
			>
				<AddItemIcon />
			</IconButton>
		</div>
	</div>

	<div class="items">
		{#if data.numberOfItems < 1}
			<h2>Nothing to do!</h2>
		{:else}
			{#each data.uncheckedItems as item}
				<CheckListItem
					data={item}
					projectUsers={data.project.users}
					bind:resolvePromise
					bind:rejectPromise
				/>
			{/each}
			{#each data.checkedItems as item}
				<CheckListItem
					data={item}
					projectUsers={data.project.users}
					bind:resolvePromise
					bind:rejectPromise
				/>
			{/each}
		{/if}
	</div>
</main>

<style lang="scss">
	main {
		margin: 1rem;
	}
	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-top: 25px;
	}
	.progress {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		margin: 0px 20px;
		padding-top: 5px;
	}

	.iconButtonWrap {
		margin-left: 20px;
		height: 40px;
	}

	hr {
		border: 0px;
	}
</style>
