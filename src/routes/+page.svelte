<script>
	import Hero from "$lib/Hero.svelte";
	import Navbar from "$lib/Navbar.svelte";
	import Section from "$lib/PageComponents/Section.svelte";
</script>
<Hero />
<Navbar />

<Section title="About NASA Hunch">
	<p>The HUNCH mission is to empower and inspire students through a Project Based Learning program where high school students learn 21st century skills and have the opportunity to launch their careers through the participation in the design and fabrication of real world valued products for NASA. We would like to expand the HUNCH program to more schools throughout the United States. However, this means that we need more volunteer mentors for our schools. Individuals knowledgeable in any of the following categories and have time to visit schools and mentor students are encouraged to apply by filling out this application.</p>
	<p>There are many different ways to join the HUNCH Program; from volunteering your time as a mentor to a local school, to becoming a HUNCH Teacher through the school district, or attending one of our Design Reviews across the country. The HUNCH program welcomes any and all interested persons or organizations to get involved in encouraging student STEM involvement through NASA HUNCH projects.</p>
</Section>
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
