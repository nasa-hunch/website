<button class="textButton" type="button" on:click><slot /></button>

<style lang="scss">
	.textButton {
		all: unset;
		position: relative;
		cursor: pointer;
		color: $primary;
		margin-left: 5px;
		padding: 0px 2px;
		z-index: 5;

		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 2px;
			bottom: 0px;
			left: 0px;
			background: $primary;
			transform: scaleX(0);
			transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
		}

		&:hover::after {
			transform: scaleX(1);
			z-index: -1;
		}
	}
</style>
