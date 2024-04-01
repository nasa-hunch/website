<script lang="ts">
  import Program from '$lib/Program.svelte';
</script>

<Program program="Flight Configuration">
  <div slot="subtitle">
    <p>
      Bring <span class="accent">HUNCH</span> projects to <span class="accent">life</span>.
    </p>
  </div>
  <div slot="main">
    <p>
      Design is one part of the process, but there is more to it than that. The <b
        >Flight Configuration</b
      > program is the next step in the process of bringing a project to the International Space Station.
    </p>
    <p>
      Work with NASA HUNCH Mentors and bring project designs and drawings up to NASA drafting and
      manufacturing standards. This includes producing completed flight drawings, documentation, and
      final 3D prints if needed.
    </p>
    <p>Students participating in flight configuration may work one of the following:</p>
    <ul>
      <li>Their project from the previous school year</li>
      <li>A new project that was chosen to move on to flight</li>
      <li>Projects from NASA organizations which must be hastily created</li>
    </ul>
    <p>
      When their designs are ready for production in one of our HUNCH schools, the project will go
      through <b>all</b> the industry safety and design requirements as any other product that is launched
      to the international space station.
    </p>
  </div>
</Program>

<style lang="scss">
  .accent {
    color: $primary;
  }

  ul {
    margin: 1rem;
  }
</style>
