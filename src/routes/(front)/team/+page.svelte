<script lang="ts">
	import Section from '$lib/page/Section.svelte';
	import { members } from '$lib/team';
</script>

<Section title="Our Team" />

<div class="members">
	{#each members as member}
		<div class="member">
			<img alt={member.firstName} src={member.img} />
			<p>{member.firstName} {member.middleInitial ?? ''} {member.lastName}</p>
			<p>{member.description}</p>
			{#if member.email}
				<p><a href="mailto:{member.email}">{member.email}</a></p>
			{/if}
			{#if member.phoneNumber}
				<p>{member.phoneNumber}</p>
			{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	.members {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-top: 1rem;
	}

	.member {
		margin: 1rem;
		padding: 1rem;
		border: 2px solid #ccc;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		border-radius: 1rem;
		width: 20rem;
		text-align: center;
	}

	img {
		width: 10rem;
		height: 10rem;
		border-radius: 50%;
		margin: 0 auto;
		object-fit: cover;
	}
</style>
