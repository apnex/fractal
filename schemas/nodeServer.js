function nodeServer() {
	let drive = {
		body: [
			[1]
		],
		map: {
			1: {
				size:{x:8, y:2},
				opts: {
					radius: 4
				},
				style: {
					'stroke-width': 2,
					'stroke': 'mGrey-800',
					'fill': 'mGrey-400'
				}
			}
		}
	};
	let power = {
		body: [
			[1,2,3]
		],
		map: {
			2: {
				size:{x:2, y:2},
				opts: {radius: 10},
				style: {
					'stroke-width': 6,
					'stroke': 'mLight-Blue-500',
				}
			}
		},
		opts: {gap:{x:1, y:0}}
	};
	let driveBay = {
		body: [
			[1],
			[2]
		],
		map: {
			1: drive,
			2: drive
		},
		opts: {gap: {x:0, y:0}}
	};
	let nodeFace = {
		body: [
			[1,2,3,4,5]
		],
		map: {
			1: power,
			2: driveBay,
			3: {
				size: {x:2, y:2},
				opts: {radius: 10},
				style: {
					'stroke-width': 4,
					'stroke': 'mGrey-400',
				}
			},
			4: driveBay,
			5: {
				size:{x:4, y:2},
				opts: {radius: 10},
				style: {
					'stroke-width': 4,
					'stroke': 'mGrey-400',
					'fill': 'mGrey-800'
				}
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	let nodePanel = {
		body: [
			[1,6,2],
			[5,0,7],
			[4,8,3]
		],
		map: {
			0: nodeFace,
			1: {tag: '1', size:{x:0, y:0}},
			2: {tag: '2', size:{x:0, y:0}},
			3: {tag: '3', size:{x:0, y:0}},
			4: {tag: '4', size:{x:0, y:0}}
		},
		link: [
			{
				path: ['1','2','3','4'],
				opts: {
					close: 1
				},
				style: {
					'stroke-width': 2,
					'stroke': 'mGrey-800',
					'fill': 'mGrey-700'
				}
			}
		],
		opts: {gap: {x:1, y:0}}
	};
	let node = {
		body: [
			[1,6,2],
			[5,0,7],
			[4,8,3]
		],
		map: {
			0: nodePanel,
			1: {tag: '11', size:{x:0, y:0}},
			2: {tag: '12', size:{x:0, y:0}},
			3: {tag: '13', size:{x:0, y:0}},
			4: {tag: '14', size:{x:0, y:0}}
		},
		link: [
			{
				path: ['11','12','13','14'],
				opts: {
					radius: 5,
					close: 1
				},
				style: {
					'stroke-width': 4,
					'stroke': 'mGrey-900',
					'fill': 'mGrey-500'
				}
			}
		],
		opts: {gap: {x:1, y:1}}
	};
	return node;
}

