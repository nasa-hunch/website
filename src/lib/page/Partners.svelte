<script lang="ts">
    import { partners, type Partner } from "$lib/partners";

    interface SizedPartner extends Partner {
        width?: number;
    }

    const sizedPartners: SizedPartner[] = structuredClone(partners);

    $: sumWidth = sizedPartners.reduce((acc, image) => acc + (image.width ?? 0), 0);;
</script>

<div class="container">
    <h1>Partners</h1>

    <p>We work with cutting-edge companies and organizations to bring the best possible experience to our students.</p>

    <div class="slideshow-container">
		<div class="slideshow" style="--slide-width: -{sumWidth}px">
			{#each sizedPartners as partner}
				<div class="wrapper-image" bind:clientWidth={partner.width}>
					<img height="60px" src={partner.logo} alt={partner.name} />
				</div>
			{/each}
			{#each sizedPartners as partner}
				<div class="wrapper-image">
					<img height="60px" src={partner.logo} alt={partner.href} />
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
    .container {
        text-align: center;
    }

    .slideshow {
		margin: 1rem;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		height: 10rem;
		animation: slideshow 100s linear infinite;
		width: 200%;
		
		img {
			height: calc(100% - 2px); // account for border
			margin: 0 0.5rem;
		}
	}

	.slideshow-container {
		width: 100%;
		overflow: hidden;
	}
	
	@keyframes slideshow {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(var(--slide-width, 0));
		}
	}
</style>