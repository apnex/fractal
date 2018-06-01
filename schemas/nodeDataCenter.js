head.load('schemas/nodeCluster.js');
function nodeDataCenter() {
	return {
		body: [
			[1,6,2],
			[5,0,7],
			[4,8,3]
		],
		map: {
			0: {
				body: [[1,0,1]],
				map: {
					0: nodeCluster(),
					1: nodeServer()
				},
				opts: {gap: {x:2, y:2}}
			},
			1: {tag: '611', size:{x:0, y:0}},
			2: {tag: '612', size:{x:0, y:0}},
			3: {tag: '613', size:{x:0, y:0}},
			4: {tag: '614', size:{x:0, y:0}}
		},
		link: [
			{
				path: ['611','612','613','614'],
				opts: {
					radius: 10,
					close: 1
				},
				style: {
					'stroke-width': 2,
					'stroke-dasharray': '20,10',
					'stroke': 'mLight-Green-500',
					'fill': 'mLight-Green-200'
				}
			}
		],
		opts: {gap: {x:1, y:1}}
	};
}
