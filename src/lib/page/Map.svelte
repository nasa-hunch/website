<script lang="ts">
  import { geoAlbersUsa, geoIdentity, geoPath } from 'd3-geo';
  import type { GeoJsonProperties } from 'geojson';
  import { cubicOut } from 'svelte/easing';
  import { spring, tweened } from 'svelte/motion';
  import { Canvas, Layer, type Render } from 'svelte-canvas';
  import { inview } from 'svelte-inview';
  import { mesh } from 'topojson-client';
  import type { Objects, Topology } from 'topojson-specification';
  import usRaw from 'us-atlas/counties-albers-10m.json';

  import { data } from './map/data';

  const opacity = tweened(0.01, {
    duration: 1000,
    easing: cubicOut
  });

  const opacityElements = tweened(0.01, {
    duration: 5000,
    easing: cubicOut
  });

  let mouseX = 0;
  let mouseY = 0;

  const us = usRaw as unknown as Topology<Objects<GeoJsonProperties>>;

  let canvas: HTMLElement;
  let width: number;

  $: projection = geoIdentity().scale(width / 975);
  $: path = geoPath(projection);
  $: geoAlbersInstance = geoAlbersUsa().scale(1300).translate([487.5, 305]);

  let pixelData: [number, number][];
  $: pixelData = data
    .map(({ location }) => {
      const { lat, lng } = location;

      if (!location) return undefined;

      const coords = geoAlbersInstance([lng, lat]);

      if (!coords) return undefined;

      return projection(coords);
    })
    .filter((x) => Array.isArray(x) && x.length === 2) as [number, number][];

  const render: Render = ({ context }) => {
    for (let i = 0; i < pixelData.length; i++) {
      const [x, y] = pixelData[i];
      context.beginPath();
      context.arc(x, y, 2, 0, 2 * Math.PI);
      context.fillStyle = `rgba(221, 54, 28, ${$opacityElements - i / pixelData.length})`;
      context.fill();
    }
  };

  const dataAmount = tweened(0, {
    duration: 2000,
    easing: cubicOut
  });

  const studentLocations = tweened(0, {
    duration: 2000,
    easing: cubicOut
  });
</script>

<h2>Connecting Students <span class="accent">Nationwide</span></h2>

<h3>
  <span class="accent">{Math.round($studentLocations)}</span> students from
  <span class="accent">{Math.round($dataAmount)}</span> locations
</h3>

<div class="wrap">
  <div
    class="canvas"
    on:inview_enter={() => {
      opacity.set(2);
      opacityElements.set(2);
      dataAmount.set(data.length);
      studentLocations.set(2575);
    }}
    use:inview={{ unobserveOnEnter: true }}
  >
    <svg style="opacity: {$opacity}">
      {#if us}
        <path d={path(mesh(us, usRaw.objects.states))} />
      {/if}
    </svg>
    <svg style="opacity: {$opacity / 2.5 - 0.5}">
      {#if us}
        <path d={path(mesh(us, usRaw.objects.counties))} />
      {/if}
    </svg>
    <div bind:this={canvas} class="canvasWrap">
      <Canvas
        style="position: absolute"
        autoplay
        on:resize={({ detail }) => (width = detail.width)}
        on:mousemove={(e) => {
          const { clientX, clientY } = e;

          mouseX = clientX;
          mouseY = clientY;
        }}
      >
        <Layer {render} />
      </Canvas>
    </div>
  </div>
</div>

<style lang="scss">
  h2,
  h3 {
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-family: 'Lexend Variable', sans-serif;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  .accent {
    color: $primary;
    font-family: inherit;
  }

  div.wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.canvas {
    position: relative;
    height: 100%;
    width: 80%;
    aspect-ratio: 975 / 610;
    border: 4px solid black;
    border-radius: 1rem;

    &:hover {
      cursor: pointer;
    }
  }

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    aspect-ratio: 975 / 610;
    border-radius: 1rem;
  }

  path {
    stroke: #ccc;
    fill: transparent;
  }
</style>
