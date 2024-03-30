<script lang="ts">
	export let data;
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import ModelForm from '$lib/components/ModalForm.svelte';
	import ModelHelper from '$lib/components/Modal.svelte';
	let openModal = false;
</script>

<ModelHelper bind:visible={openModal}>
	<ModelForm action="?/createCategory" method="post">
		<h2>New Category</h2>
		<Input name="name" bgColor="#f1f1f1" label="Name" />
		<Input name="icon" bgColor="#f1f1f1" label="Icon" />
		<input name="color" type="color" />
		<input name="deadline" type="date" />
		<Button value="Create" />
	</ModelForm>
</ModelHelper>

<div class="wrap">
	<h2>Project Categories</h2>
	<div class="categories">
		{#each data.categories as category}
			<a
				style="--circleBg: #{category.color}"
				class="category"
				href="/dashboard/admin/projects/category/{category.id}"
			>
				<div class="circle" />
				<p>{category.name}</p>
			</a>
		{/each}
		<Button value="New Category" on:click={() => (openModal = true)} />
	</div>
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
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
		background: $background3;
		cursor: pointer;
	}
	.category p {
		font-size: 1.2rem;
		margin: 0px;
	}
	h2 {
		text-align: center;
	}
</style>
