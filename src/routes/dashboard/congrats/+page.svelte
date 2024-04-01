<script lang="ts">
  import { Confetti } from 'svelte-confetti';
</script>

<div class="confettiHolder">
  <Confetti
    amount={200}
    delay={[500, 2000]}
    duration={5000}
    fallDistance="100vh"
    infinite
    x={[-5, 5]}
    y={[0, 0.1]}
  />
</div>

<div class="wrap">
  <h1>Your project has been submitted.</h1>
  <blockquote cite="Sally Ride">
    The stars don't look bigger, but they do look brighter
    <footer>
      <cite> - Sally Ride </cite>
    </footer>
  </blockquote>
</div>

<style lang="scss">
  .wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: start;
    padding-top: 50px;
  }
  .confettiHolder {
    position: fixed;
    top: -50px;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    overflow: hidden;
    pointer-events: none;
  }
</style>
