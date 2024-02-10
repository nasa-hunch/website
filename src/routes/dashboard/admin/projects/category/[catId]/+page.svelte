<script lang="ts">
	export let data;
</script>

<div class="wrap">
	<h1>{data.category?.name}</h1>
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
	
</style>