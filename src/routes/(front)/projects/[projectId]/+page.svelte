

<script lang="ts">
	export let data;
</script>

<div class="content">
	<div class="inner">
		<h1>{data.projectTemplate.name}</h1>
	</div>
</div>


<style lang="scss">
	.content {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.inner {
		width: 90%;
		text-align: center;
	}
</style>
