<script lang="ts">
	import { geoAlbersUsa, geoIdentity, geoPath } from 'd3-geo';
	import type { GeoJsonProperties } from 'geojson';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { Canvas, Layer, type Render } from 'svelte-canvas';
	import { mesh } from 'topojson-client';
	import type { Objects, Topology } from 'topojson-specification';
	import usRaw from 'us-atlas/states-albers-10m.json';

	const opacity = tweened(0.01, {
		duration: 1000,
		easing: cubicOut
	});

	const opacityElements = tweened(0.01, {
		duration: 3000,
		easing: cubicOut
	});

	import { inview } from 'svelte-inview';

	import { data } from './map/data';

	const us = usRaw as unknown as Topology<Objects<GeoJsonProperties>>;

	export let animate = false;

	let width: number;

	$: projection = geoIdentity().scale(width / 975);
	$: path = geoPath(projection);
	const usMesh = mesh(us, usRaw.objects.states);
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
</script>

<h2>Connecting Students <span class="accent">Nationwide</span></h2>

<div class="wrap">
	<div
		class="canvas"
		on:inview_enter={() => {
            if (!animate) return;
			opacity.set(1);
			opacityElements.set(2);
		}}
		use:inview={{ unobserveOnEnter: true }}
	>
		<svg style="opacity: {$opacity}">
			{#if us}
				<path d={path(usMesh)} />
			{/if}
		</svg>
		<Canvas style="position: absolute" autoplay on:resize={({ detail }) => (width = detail.width)}>
			<Layer {render} />
		</Canvas>
	</div>
</div>

<style lang="scss">
	h2 {
		width: 100%;
		text-align: center;
		font-size: 3rem;
		font-weight: 500;
		font-family: 'Lexend Variable', sans-serif;
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
	}

	svg {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	path {
		stroke: #ccc;
		fill: transparent;
	}
</style>
