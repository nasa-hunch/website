<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import NonTransparent from '$lib/landing/images/non-transparent.png';
	import Transparent from '$lib/landing/images/transparent.png';
	import type { GalleryImage } from '$lib/page/Gallery.svelte';
	import Gallery from '$lib/page/Gallery.svelte';
	import Map from '$lib/page/Map.svelte';
	import Mission from '$lib/page/Mission.svelte';

	const title = 'NASA Hunch';

	// Set the image gallery
	let gallery: GalleryImage[];
	$: gallery = data.categories.map((entry) => ({
		caption: entry.name,
		src: entry.banner,
		href: `/programs/${entry.slug}`,
		alt: entry.name
	}));

	export let data;
</script>

<Hero image={NonTransparent} image2={Transparent} {title} />
<Mission />
<Map locations={data.locations} />
<Gallery galleryImages={gallery} title="Explore Our Programs" />
