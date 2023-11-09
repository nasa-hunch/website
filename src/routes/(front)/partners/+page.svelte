<script lang="ts">
    import Section from "$lib/page/Section.svelte";
    import { partners } from "$lib/partners"
</script>

<Section title="Partners">
    <p>
        These organizations work closely with us to
        help provide funding and equipment for our various competitons.
    </p>
    
    <p>Our partners are listed below:</p>
</Section>

<div class="partners">
    {#each partners as partner}
        <img src={partner.logo} alt={partner.name} />
    {/each}
</div>

<style>
    .partners {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .partners img {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        margin: 0 auto;
        object-fit: cover;
    }
</style>