<script lang="ts">
	export let data;
</script>

<div class="wrap">
	{#each data.submissions as submission}
		<div class="submission">
			<p>
				{submission.organization.name}
			</p>
		</div>
	{/each}
</div>


<style lang="scss">
	.wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 2rem;
		
	}

	.submission {
		width: 100%;
		background: $background-alt;
		border-radius: 0.25rem;
		margin-bottom: 0.3rem;
		padding: 0rem 1rem;
	}
</style>
