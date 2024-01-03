<script lang="ts">
	import Gallery from '$lib/page/Gallery.svelte';
	import type { GalleryImage } from '$lib/page/Gallery.svelte';
	import Section from '$lib/page/Section.svelte';
	import Hero from '$lib/Hero.svelte';

	const title = 'NASA&nbsp;Hunch';
	const image = 'https://live.staticflickr.com/65535/53142754400_9dde8a8d78_k_d.jpg';

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

<Hero {title} {image} />

<Gallery galleryImages={gallery} title="Explore Program Categories" />

<style>
	p {
		font-size: 1.2rem;
	}
</style>
