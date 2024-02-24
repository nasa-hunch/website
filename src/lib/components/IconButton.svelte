<button class="iconButton" on:click>
	<slot />
</button>

<style lang="scss">
	.iconButton {
		all: unset;
		cursor: pointer;
		padding: 5px;
		height: 100%;
		box-sizing: border-box;
		margin: 0px;
		aspect-ratio: 1/1;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: all cubic-bezier(0.075, 0.82, 0.165, 1) 0.25s;

		&:hover {
			background: $background2;
		}

		svg {
			height: 100%;
			background: purple;
		}
	}

	:global(.iconButton svg) {
		height: 100%;
		width: 100%;
	}
</style>
