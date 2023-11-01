<script>
	export let title = 'Title';
	export let showButton = false;
	export let buttonLink = '';
	export let buttonText = 'Learn More';
</script>

<div class="section">
	<div class="sectionInner">
		<div class="title">
			<h3>{title}</h3>
		</div>

		<slot />
		{#if showButton}
			<a href={buttonLink} class="button">{buttonText}</a>
		{/if}
	</div>
</div>

<style>
	.section {
		margin-top: 5vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.title {
		display: flex;
	}
	.section h3 {
		font-size: 3rem;
		font-family: 'Lexend Variable', sans-serif;
		font-weight: 500;
		margin: 0px;
		padding: 0px;
		position: relative;
	}
	.section h3::after {
		content: '';
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 0.25rem;
		background: #dd361c;
		border-radius: 1rem;
	}
	.sectionInner {
		width: 95%;
	}
</style>
