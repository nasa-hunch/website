<script lang="ts">
	import Section from '$lib/page/Section.svelte';
	import { members } from '$lib/team';
</script>

<Section title="Our Team">
	<p>
		We are a team of <span class="highlight">dedicated</span>
		individuals who are passionate
		about the education and success of our program. We are
		committed to providing the
		<span class="highlight">best</span> possible experience for
		our students and are always looking for ways to improve.
	</p>
</Section>

<main>
	<div class="members">
		{#each members as member}
			<div class="member">
				<img alt={member.firstName} src={member.img} />
				<div class="content">
					<h2>{member.firstName} {member.middleInitial ? `${member.middleInitial + "."}` : ""} {member.lastName}</h2>
					<p>{member.description}</p>
					{#if member.email}
						<p><a href="mailto:{member.email}">{member.email}</a></p>
					{/if}
					{#if member.phoneNumber}
						<p>{member.phoneNumber}</p>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</main>

<style lang="scss">
	.members {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 1rem;
	}

	.member {
		margin: 1rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		border-radius: 1rem;
		width: 20rem;
		text-align: center;
		background-color: rgba(0, 0, 0, 0.01);
	}

	img {
		width: 100%;
		aspect-ratio: 1 / 1;
		margin: 0 auto;
		object-fit: cover;
		border-radius: 1rem 1rem 0 0;
		border-bottom: 4px solid $primary;
	}

	.content {
		text-align: left;
		padding: 1rem;
		
		h2 {
			color: $primary;
			font-weight: 700;
		}
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.highlight {
		color: $primary;
		font-weight: 700;
	}
</style>
