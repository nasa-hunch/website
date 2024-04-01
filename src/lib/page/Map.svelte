<script lang="ts">
	import { geoAlbersUsa, geoIdentity, geoPath } from 'd3-geo';
	import type { GeoJsonProperties } from 'geojson';
	import { Canvas, Layer,type Render } from 'svelte-canvas';
	import { feature, mesh } from 'topojson-client';
	import type { Objects,Topology } from 'topojson-specification';
	import usRaw from 'us-atlas/states-albers-10m.json';

	import { data } from './map/data';

	const us = usRaw as unknown as Topology<Objects<GeoJsonProperties>>;

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
		for (const [x, y] of pixelData) {
			context.beginPath();
			context.arc(x, y, 2, 0, 2 * Math.PI);
			context.fillStyle = '#dd361c';
			context.fill();
		}
	};
</script>

<h2>Connecting Students <span class="accent">Nationwide</span></h2>

<div class="wrap">
	<div class="canvas">
		<svg>
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
