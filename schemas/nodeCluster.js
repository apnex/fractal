head.load('schemas/nodeServer.js');
function nodeCluster() {
	return {
		body: [
			[1,6,2],
			[5,0,7],
			[4,8,3]
		],
		map: {
			0: {
				body: [[0],[0],[0]],
				map: {
					0: nodeServer()
				},
				opts: {gap: {x:1, y:1}}
			},
			1: {tag: '511', size:{x:0, y:0}},
			2: {tag: '512', size:{x:0, y:0}},
			3: {tag: '513', size:{x:0, y:0}},
			4: {tag: '514', size:{x:0, y:0}}
		},
		link: [
			{
				path: ['511','512','513','514'],
				opts: {
					radius: 5,
					close: 1
				},
				style: {
					'stroke-width': 4,
					'stroke': 'mLight-Blue-500',
					'fill': 'mLight-Blue-200'
				}
			}
		],
		opts: {gap: {x:1, y:1}}
	};
}
