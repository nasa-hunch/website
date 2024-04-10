<script lang="ts">
	export let data;
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import ColorPicker from '$lib/components/ColorPicker.svelte';
	import DatePicker from '$lib/components/DatePicker.svelte';
	import Input from '$lib/components/Input.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import ModelForm from '$lib/components/ModalForm.svelte';
</script>

{#if $page.state.modal === 'createCategory'}
	<Modal on:close={() => history.back()}>
		<ModelForm action="?/createCategory" method="post">
			<h2>New Category <ColorPicker name="color" /></h2>
			<Input name="name" bgColor="#f1f1f1" label="Name" />
			<div class="margin-separator" />
			<DatePicker name="deadline" bgColor="#f1f1f1" label="Deadline" />
			<div class="margin-separator" />
			<Button value="Create" />
		</ModelForm>
	</Modal>
{/if}

<main>
	<h2>Project Categories</h2>
	<div class="categories">
		{#each data.categories as category}
			<a
				style="--circleBg: #{category.color}"
				class="category"
				href="/dashboard/admin/categories/{category.id}"
			>
				<div class="circle" />
				<p>{category.name}</p>
			</a>
		{/each}
		<Button
			value="New Category"
			on:click={() =>
				pushState('', {
					modal: 'createCategory'
				})}
		/>
	</div>
</main>

<style lang="scss">
	.margin-separator {
		margin-bottom: 1rem;
	}

	main {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		padding-bottom: 1rem;
	}
	.categories {
		width: 90%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
	}
	.circle {
		flex-shrink: 1;
		width: 20px;
		height: 20px;
		border-radius: 10px;
		background: var(--circleBg);
		margin-right: 10px;
	}
	.category {
		all: unset;
		width: 100%;
		padding: 15px;
		box-sizing: border-box;
		margin-bottom: 10px;
		background: $background-alt;
		display: flex;
		flex-direction: row;
		align-items: center;
		border-radius: 5px;
		transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.5s;
		border: 1px solid transparent;
	}
	.category:hover {
		background: darken($background-alt, 5%);
		cursor: pointer;
	}
	.category p {
		font-size: 1.2rem;
		margin: 0px;
	}
	h2 {
		text-align: center;
		display: flex;
		gap: 1rem;
		justify-content: center;
		align-items: center;
	}
</style>
