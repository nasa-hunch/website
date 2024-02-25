<script lang="ts">
	import Facebook from '~icons/mdi/facebook';
	import Twitter from '~icons/mdi/twitter';
	import Youtube from '~icons/mdi/youtube';
	import IconButton from './IconButton.svelte';
</script>

<footer>
	<div>
		<img src="/favicon.png" alt="NASA Hunch Logo" />
	</div>
	<div>
		&copy; 2024 All Rights Reserved.
	</div>
	<div>
		<div class="links">
			<IconButton href="/">
					<Twitter/>
			</IconButton>
			<IconButton href="/">
				<Facebook/>
			</IconButton>
			<IconButton href="/">
				<Youtube/>
			</IconButton>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
        padding: 1rem 3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

		.links {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			width: 100%;

			.link {
				margin: 0px 0.5rem;
			}
		}
    }

    .copyright-container {
        width: 100%;
        text-align: center;
    }
</style>