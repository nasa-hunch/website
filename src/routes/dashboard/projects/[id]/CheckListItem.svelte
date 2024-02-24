<script lang="ts">
	import DeleteIcon from '~icons/mdi/delete-outline';
	import DoneIcon from '~icons/mdi/done';
	import AddPersonIcon from '~icons/mdi/person-add-outline';
	import IconButton from '$lib/components/IconButton.svelte';

	type CheckListItem = {
		id: number;
		createdAt: Date;
		updatedAt: Date;
		name: string;
		checked: boolean;
		projectId: number;
		checkedById: number | null;
	};
	export let data: CheckListItem;
</script>

<div class="checkListItem">
	<div class="left">
		<h3>
			{data.name}
		</h3>
	</div>
	<div class="right">
		<IconButton>
			<DoneIcon />
		</IconButton>
		<IconButton>
			<AddPersonIcon />
		</IconButton>
		<IconButton>
			<DeleteIcon />
		</IconButton>
	</div>
</div>

<style lang="scss">
	.checkListItem {
		margin: 10px 0px;
		border-radius: 5px;
		padding: 15px;
		box-sizing: border-box;
		background: $background-alt;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.left {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: start;
	}
	.right {
		display: flex;
		flex-direction: row;
	}

	h3 {
		all: unset;
		font-size: 1.2rem;
		margin: 0px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
