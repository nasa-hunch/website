<script lang="ts">
	export let data;
</script>

<div class="wrap">
	<div class="header">
		<h1>{data.category?.name}</h1>
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
	.header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: $gray-lighter;
	}
	
</style>