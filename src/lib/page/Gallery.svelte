<script context="module" lang="ts">
	export interface GalleryImage {
		caption: string;
		src: string;
		href: string;
		alt: string;
	}
</script>

<script lang="ts">
	import GalleryImageElement from './GalleryImage.svelte';

	export let galleryImages: GalleryImage[];
	export let title: string | undefined = undefined;
</script>

<div class="gallery">
	{#if title}
		<h3>{title}</h3>
	{/if}
	<div class="items">
		{#each galleryImages as image, i}
			<GalleryImageElement
				options={{
					href: image.href,
					src: image.src,
					caption: image.caption,
					multiplier: (i % 2) + 1
				}}
			/>
		{/each}
	</div>
</div>

<style lang="scss">
	.gallery {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.items {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
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
