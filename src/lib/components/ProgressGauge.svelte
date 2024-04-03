<script lang="ts">
	import * as d3 from 'd3';

	/**
	 * %, ex: 0.12 = 12%
	 */
	export let percentDone = 0.55;
	export let fill = 'var(--green)';
	export let height = 30;
	export let width = 30;
	export let strokeWidth = 3;

	const createArc = d3.arc();

	let arc = createArc({
		innerRadius: width / 2 - strokeWidth,
		outerRadius: width / 2,
		startAngle: 0,
		endAngle: 0
	});

	$: if (percentDone) {
		arc = createArc({
			innerRadius: width / 2 - strokeWidth,
			outerRadius: width / 2,
			startAngle: 0,
			endAngle: percentDone * (Math.PI * 2)
		});
	}

	const bgArc = createArc({
		innerRadius: width / 2 - strokeWidth,
		outerRadius: width / 2,
		startAngle: 0,
		endAngle: Math.PI * 2
	});
</script>

<svg height="{height}px" width="{width}px">
	<path
		d={arc}
		{fill}
		height="100%"
		transform="translate({width / 2}, {height / 2})"
		width="100%"
	/>
	<path
		d={bgArc}
		{fill}
		height="100%"
		opacity="0.15"
		transform="translate({width / 2}, {height / 2})"
		width="100%"
	/>
</svg>
