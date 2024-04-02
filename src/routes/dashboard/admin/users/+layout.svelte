<div class="wrap">
	<div class="inner">
		<slot />
	</div>
</div>

<style lang="scss">
	.wrap {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.inner {
		padding: 0rem 2rem;
		width: 100%;
		box-sizing: border-box;
	}
</style>
