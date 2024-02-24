<script lang="ts">
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
	<h3>
		{data.name}
	</h3>
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
	}

	h3 {
		margin: 0px;
	}
</style>