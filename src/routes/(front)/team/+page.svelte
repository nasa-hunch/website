<script lang="ts">
	import Section from '$lib/page/Section.svelte';
	import { members } from '$lib/team';
</script>

<Section title="Our Team" />

<div class="members">
	{#each members as member}
		<div class="member">
			<img src={member.img} alt={member.firstName} />
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

<style>
	.members {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.member {
		margin: 1rem;
		padding: 1rem;
		border: 1px solid #ccc;
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
