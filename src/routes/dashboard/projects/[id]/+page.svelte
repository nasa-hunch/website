<script lang="ts">
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import toast from 'svelte-french-toast';

	import AddItemIcon from '~icons/mdi/plus';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import ModelForm from '$lib/components/ModelForm.svelte';
	import ModelHelper from '$lib/components/ModelHelper.svelte';
	import ProgressGauge from '$lib/components/ProgressGauge.svelte';

	import type { PageData } from './$types';
	import CheckListItem from './CheckListItem.svelte';

	export let data: PageData;
	export let form;

	let percentDone = tweened(0, {
		duration: 1000,
		easing: cubicInOut
	});

	onMount(() => {
		percentDone.set(12);
	});

	let creatingItem = false;

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
		creatingItem = false;
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

<ModelHelper bind:visible={creatingItem}>
	<ModelForm action="?/createItem" method="post" on:submit={submitNewItem}>
		<h2>Creating Item</h2>
		<Input name="name" label="Name" />
		<hr />
		<Button value="Create" />
	</ModelForm>
</ModelHelper>

<main>
	<div class="title">
		<div class="progress">
			<ProgressGauge fill="var(--green)" percentDone={$percentDone} strokeWidth={4} />
		</div>
		<h1>Check List</h1>
		<button
			class="iconButton"
			on:click={() => {
				creatingItem = true;
			}}
		>
			<AddItemIcon />
		</button>
	</div>

	<div class="items">
		{#if data.uncheckedItems.length < 1}
			<h2>Nothing to do!</h2>
		{:else}
			{#each data.uncheckedItems as item}
				<CheckListItem data={item}/>
				
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

		* {
			margin: 0px;
		}
	}
	.progress {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		margin: 0px 20px;
		padding-top: 5px;
	}
	.iconButton {
		all: unset;
		cursor: pointer;
		padding: 5px;
		height: 100%;
		box-sizing: border-box;
		margin: 0px 10px;
		aspect-ratio: 1/1;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;

		&:hover {
			background: $background2;
		}
	}

	hr {
		border: 0px;
	}
</style>
