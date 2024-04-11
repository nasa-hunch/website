<script>

	import Combobox from "$lib/components/Combobox.svelte";

</script>
<div class="wrap">
	<div class="inner">
		<div class="toolbar">
			<Combobox label="Branch" />
			
		</div>
		<slot/>
	</div>
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		padding-top: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;

		.inner {
			width: 90%;
		}
	}

	.toolbar {
		display: flex;
		align-items: center;
		justify-content: start;
	}
</style>