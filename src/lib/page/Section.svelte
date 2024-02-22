<script lang="ts">
	export let title = 'Title';
	export let showButton = false;
	export let buttonLink = '';
	export let buttonText = 'Learn More';
</script>

<div class="sectionOuter">
	<section>
		<div class="title">
			<h3>{title}</h3>
		</div>
		<div class="content">
			<slot />
		</div>

		{#if showButton}
			<a class="button" href={buttonLink}>{buttonText}</a>
		{/if}
	</section>
</div>

<style lang="scss">
	.content {
		width: 100%;
		font-size: 18px;
	}

	.sectionOuter {
		width: calc(100% - 10rem);
		display: flex;
		justify-content: center;
		margin: 0 5rem;
		margin-top: 1.5rem;
		margin-bottom: 0 !important;
	}

	section {
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: left;
	}

	.title {
		display: flex;
		width: 100%;
	}

	section h3 {
		text-align: left;
		font-size: 2.5rem;
		font-family: 'Lexend Variable', sans-serif;
		font-weight: 500;
		margin: 0px;
		padding: 0px;
		position: relative;
		width: 100%;
	}
	h3::after {
		content: '';
		position: absolute;
		bottom: -10px;
		left: 0px;
		width: 100%;
		height: 0.25rem;
		background: $primary;
		border-radius: 1rem;
	}
</style>
