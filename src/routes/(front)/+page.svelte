<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import NonTransparent from '$lib/landing/images/non-transparent.png';
	import Transparent from '$lib/landing/images/transparent.png';
	import type { GalleryImage } from '$lib/page/Gallery.svelte';
	import Gallery from '$lib/page/Gallery.svelte';
	import Mission from '$lib/page/Mission.svelte';

	const title = 'NASA Hunch';

	// Set the image gallery
	let gallery: GalleryImage[] = [
		{
			caption: 'Design and Prototyping',
			src: 'https://nasahunch.com/images/design.jpg',
			href: '/programs/design',
			alt: 'Design and Prototyping'
		},
		{
			caption: 'Software',
			src: 'https://nasahunch.com/images/software.jpg',
			href: '/programs/software',
			alt: 'Software'
		},
		{
			caption: 'Hardware',
			src: 'https://nasahunch.com/images/hardware.jpg',
			href: '/programs/hardware',
			alt: 'Hardware'
		},
		{
			caption: 'Sewn Flight Articles',
			src: 'https://nasahunch.com/images/softgoods.jpg',
			href: '/programs/sewn',
			alt: 'Sewn Flight Articles'
		},
		{
			caption: 'Video & Media',
			src: 'https://nasahunch.com/images/video.png',
			href: '/programs/video',
			alt: 'Video & Media'
		},
		{
			caption: 'Culinary',
			src: 'https://nasahunch.com/images/culinary.jpg',
			href: '/programs/culinary',
			alt: 'Culinary'
		},
		{
			caption: 'Biomedical Science',
			src: 'https://nasahunch.com/images/biomed-program-card-image.jpg',
			href: '/programs/biomedical',
			alt: 'Biomedical Science'
		},
		{
			caption: 'Flight Configuration',
			src: 'https://nasahunch.com/images/flight-configuration-card-image.jpg',
			href: '/programs/flight-config',
			alt: 'Flight Configuration'
		}
	];
</script>

<Hero image={NonTransparent} image2={Transparent} {title} />
<Mission />
<Gallery galleryImages={gallery} title="Explore Program Categories" />
