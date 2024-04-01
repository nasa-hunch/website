<script lang="ts">
  import culinary from '$lib/connect/images/culinary1.webp';
  import Section from '$lib/page/Section.svelte';
</script>

<main>
  <Section title="History of Hunch">
    <div class="history">
      <div class="image">
        <img alt="Culinary Team" src={culinary} />
      </div>
      <div class="text">
        <p>
          16 years ago, NASA HUNCH was founded as a means of giving high school students new
          educational experiences by producing <b>hardware training items</b> for the International
          Space Station. Today, the program has grown from the
          <i>three</i> schools in 2003 to well over <i>two hundred</i> schools all across the
          country participating in a wide variety of projects, ranging from
          <a href="/programs/sewn">industrial sewing</a>
          to <a href="/programs/culinary">designing food for astronauts</a>.
        </p>
        <br />
        <p>
          We work to improve the lives of the International Space Station crew from day-to-day
          personal items or tools to updating parts of the station itself from their original
          designs. HUNCH fills a unique niche for the International Space Station, as well as
          providing high quality training and flight parts to other NASA programs and partners, by
          covering a wide range of topics. Through HUNCH, students have a unique opportunity to
          learn skills and have a real-world contribution to NASA’s space missions. Join Us!
        </p>
      </div>
    </div>
  </Section>

  <Section title="Latest From Hunch" />

  <!-- TODO: blogging -->
</main>

<style lang="scss">
  @media screen and (min-width: 1400px) {
    main {
      max-width: 80%;
      margin: auto;
    }
  }

  .history {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
  }

  .history p {
    margin: 0;
  }

  .history img {
    width: 40vw;
    float: left;
  }

  /* make it vertical if not wide enough */
  @media screen and (max-width: 1000px) {
    .history {
      flex-direction: column;
    }

    .history div.image {
      display: flex;
      justify-content: center;
    }

    .history img {
      width: 80%;
    }
  }
</style>
