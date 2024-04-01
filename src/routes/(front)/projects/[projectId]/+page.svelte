<script lang="ts">
	export let data;
</script>

<div class="content">
	<div class="inner">
		<h1 class="name">{data.projectTemplate.name}</h1>
		{@html data.projectTemplate.description}
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
		max-width: 700px;
		margin: 0 1rem;
	}

	.name {
		text-align: center;
	}
</style>
