<script lang="ts">
	import Facebook from '~icons/mdi/facebook';
	import Twitter from '~icons/mdi/twitter';
	import Youtube from '~icons/mdi/youtube';

	import IconButton from './IconButton.svelte';
</script>

<footer>
	<div class="left">
		<img alt="NASA Hunch Logo" src="/favicon.png" />
	</div>
	<div class="center">&copy; 2024 All Rights Reserved.</div>
	<div class="right">
		<IconButton href="/">
			<Twitter />
		</IconButton>
		<IconButton href="/">
			<Facebook />
		</IconButton>
		<IconButton href="/">
			<Youtube />
		</IconButton>
	</div>
</footer>

<style lang="scss">
	footer {
		padding: 1rem 3rem;
		height: 75px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		div.right {
			display: flex;
			width: 100%;
			font-size: 1.4rem;
			justify-content: right;
		}

		div {
			width: 100%;
		}

		div.left {
			text-align: left;
		}

		div.center {
			text-align: center;
		}

		div.right {
			text-align: right;
		}
	}
</style>
