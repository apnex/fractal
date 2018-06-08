function linkTest() {
	let group = {
		body: [
			[1,2]
		],
		map: {
			1: {
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
							'stroke': 'mLight-Blue-500',
							'fill': 'mLight-Blue-200'
						}
					}
				],
				size: {x: 0, y: 0},
				opts: {
					gap: {x:2, y:2}
				},
				tag: "g1"
			},
			2: {
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
							'stroke': 'mLight-Blue-500',
							'fill': 'mLight-Blue-200'
						}
					}
				],
				size: {x: 0, y: 0},
				opts: {
					gap: {x:2, y:2}
				},
				tag: "g2"
			}
		},
		link: [
			{
				path: ["g1","g2"],
				style: {
					'stroke-width': 4,
					'stroke': 'mRed-500'
				}
			}
		],
		opts: {
			gap: {x:4, y:4}
		}
	};
	return group;
}
