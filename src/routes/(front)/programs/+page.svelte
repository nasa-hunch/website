<script lang="ts">
	import Gallery, { type GalleryImage } from '$lib/page/Gallery.svelte';
	export let data;

	let gallery: GalleryImage[];
	$: gallery = data.categories.map((entry) => ({
		caption: entry.name,
		src: entry.banner,
		href: `/programs/${entry.slug}`,
		alt: entry.name
	}));
</script>

<Gallery galleryImages={gallery} />
