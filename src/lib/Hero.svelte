<script lang="ts">
	import { activeHero } from '$lib/ActiveHero';
</script>

{#if !$activeHero.disabled}
	<header>
		<!-- TODO: give this life on the main page -->
		<div class="wrapper" style="--img: url({$activeHero.image})">
			<h1>{$activeHero.title}</h1>
		</div>
	</header>

	<style>
		header {
			margin: 0px;
			padding: 0px;
			text-align: center;
			overflow: hidden;
		}

		.wrapper {
			width: 100%;
			height: calc(100vh - 100px);
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
		}

		.wrapper::before {
			background-image: var(--img);
			content: '';
			position: absolute;
			width: 100%;
			height: calc(100vh - 100px);
			background-size: cover;
			background-position: center;
		}

		h1 {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 10rem;
			color: transparent;
			font-weight: 900;
			line-height: 1;
			background: rgba(50, 50, 50, 0.6);
			color: white;
			width: 100%;
			height: 100%;
			mix-blend-mode: multiply;
		}
	</style>
{/if}
