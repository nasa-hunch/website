<script context="module" lang="ts">
	export interface GalleryImage {
		caption: string;
		src: string;
		href: string;
		alt: string;
	};
</script>

<script lang="ts">
	const base = `/nasa-hunch`

	export let gallaryImages: GalleryImage[];
	export let title = "Gallery"
</script>


<div class="gallery">
	<h3>{title}</h3>
	<div class="items">
		{#each gallaryImages as image}
			<a class="gallaryImage" href={base + image.href} style="background-image: url({image.src})">
				<div class="caption">
					{image.caption}
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.gallery {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.items {
		width: 95%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	
	.gallaryImage {
		position: relative;
		min-width: 250px;
		width: calc(25% - 20px);
		margin: 10px;
		height: 250px;
		background-size: cover;
		background-position: center;
		display: flex;
		flex-direction: column;
		justify-content: end;
		text-decoration: none;
		border-radius: 5px;
		transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	.gallaryImage::after {
		content: '';
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
		border-radius: 5px;
		z-index: 3;
	}

	.gallaryImage:hover {
		transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	.gallaryImage:hover::after {
		background: rgba(221,54,28, 0.5)
	}
	
	.caption {
		background: rgba(0, 0, 0, 0.75);
		color: white;
		text-decoration: none;
		padding: 0.75rem;
		font-size: 1.5rem;
		z-index: 4;
		backdrop-filter: blur(5px);
		
	}
	h3 {
		font-size: 3rem;
		font-family: 'Lexend Variable', sans-serif;
		font-weight: 500;
		padding: 0px;
		margin: 25px;
		position: relative;
	}
</style>

