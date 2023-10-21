<script lang="ts">
	import Hero from "$lib/Hero.svelte";
	import Navbar from "$lib/Navbar.svelte";
	import Gallery from "$lib/page/Gallery.svelte";
	import type { GalleryImage } from "$lib/page/Gallery.svelte";
	import Section from "$lib/page/Section.svelte";
	import Stats from "$lib/page/Stats.svelte";
	import type { StatType } from "$lib/page/Stats.svelte";

	//define the stats
	let stats: StatType[] = [
		{
			name: "Programs",
			value: 511
		},
		{
			name: "States",
			value: 47
		},
		{
			name: "Partners",
			value: 21
		},
		{
			name: "Flown Items",
			value: 3000,
			suffix: "+"
		},
		{
			name: "Students",
			value: 2575
		}
	]
	
	//define the image gallery
	let gallary: GalleryImage[] = [
		{
			caption:"Design and Prototyping",
			src:"https://nasahunch.com/images/design.jpg",
			href:"/programs/design",
			alt:"Design and Prototyping"
		},
		{
			caption: "Software",
			src: "https://nasahunch.com/images/software.jpg",
			href: "/programs/software",
			alt: "Software"
		}, 
		{
			caption: "Hardware",
			src: "https://nasahunch.com/images/hardware.jpg",
			href: "/programs/hardware",
			alt: "Hardware"
		},
		{
			caption: "Sewn Flight Articles", 
			src: "https://nasahunch.com/images/softgoods.jpg",
			href: "/programs/sewn",
			alt: "Sewn Flight Articles"
		},
		{
			caption: "Video & Media",
			src: "https://nasahunch.com/images/video.png",
			href: "/programs/video",
			alt: "Video & Media",
		}, 
		{
			caption: "Culinary", 
			src: "https://nasahunch.com/images/culinary.jpg", 
			href: "/programs/culinary",
			alt: "Culinary"
		},
		{
			caption: "Biomedical Science",
			src: "https://nasahunch.com/images/biomed-program-card-image.jpg",
			href: "/programs/biomedical",
			alt: "Biomedical Science",
		},
		{
			caption: "Flight Configuration",
			src: "https://nasahunch.com/images/flight-configuration-card-image.jpg",
			href: "/programs/flight-config",
			alt: "Flight Configuration"
		}
	]

</script>
<Hero />
<Navbar />

<Section title="About NASA Hunch">
	<p>
		NASA HUNCH's mission is to empower and inspire students through project-based learning,
		where high school students learn 21st-century skills and have the opportunity to launch their careers
		through designing and fabricating real-world, valued products for NASA.
		We want to expand the HUNCH program to more schools throughout the United States.
		However, this means that we need more volunteer mentors for our schools. Individuals knowledgeable in any of the
		following categories who have time to visit schools and mentor students are encouraged to apply by filling out this application.
	</p>
	<p>
		There are many different ways to join the HUNCH Program; from volunteering your time as a mentor to a local school,
		to becoming a HUNCH Teacher through the school district, or attending one of our Design Reviews across the country.
		The HUNCH program welcomes any and all interested persons or organizations to get involved in encouraging student
		STEM involvement through NASA HUNCH projects.
	</p>
</Section>
<Stats {stats} />
<Gallery gallaryImages={gallary} title="Explore Program Categories" />
<div class="tempSpacer">

</div>

<style>
	.tempSpacer {
		height: 300vh;
	}
	p {
		font-size: 1.2rem;
	}
</style>
