<script>
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
		<slot />

		{#if showButton}
			<a href={buttonLink} class="button">{buttonText}</a>
		{/if}
	</section>
</div>

<style>
	.sectionOuter {
		width: calc(100% - 10rem);
		display: flex;
		justify-content: center;
		margin: 0 5rem;
	}

	section {
		max-width: 900px;
		width: 100%;
		margin: 1.5rem 0;
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
		font-size: 3rem;
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
		bottom: -5px;
		left: 0px;
		width: 100%;
		height: 0.25rem;
		background: #dd361c;
		border-radius: 1rem;
	}
</style>
