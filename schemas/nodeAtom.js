function nodeAtom() {
	return {
		body: [
			[1,6,2],
			[5,0,7],
			[4,8,3]
		],
		map: {
			1: {tag: "n1"},
			2: {tag: "n2"},
			3: {tag: "n3"},
			4: {tag: "n4"}
		},
		link: [
			{
				path: ["n1","n2","n3","n4"],
				opts: {
					close: 1
				},
				style: {
					'stroke-width': 4,
					'stroke': 'mLight-Blue-600',
					'fill': 'mLight-Blue-300'
				}
			}
		],
		size: {x: 4, y: 4},
		style: {
			'stroke-width': 4,
			'stroke': 'mLight-Blue-600',
			'fill': 'mWhite'
		},
		opts: {
			gap: {x:2, y:2},
			radius: 10
		}
	};
}
