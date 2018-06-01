function nodeL8() {
	var nodeL8Port = {
		opts: {
			radius: 5
		},
		style: {
			'stroke': 'mAmber-700',
			'fill': 'mAmber-400'
		}
	};
	var nodeL8PortGroup01 = {
		body: [
			[1,2]
		],
		map: {
			1: {
				tag: 'L80101',
				opts: nodeL8Port.opts,
				style: nodeL8Port.style
			},
			2: {
				tag: 'L80102',
				opts: nodeL8Port.opts,
				style: nodeL8Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL8PortGroup02 = {
		body: [
			[1],
			[2]
		],
		map: {
			1: {
				tag: 'L80201',
				opts: nodeL8Port.opts,
				style: nodeL8Port.style
			},
			2: {
				tag: 'L80202',
				opts: nodeL8Port.opts,
				style: nodeL8Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL8PortGroup03 = {
		body: [
			[1,2]
		],
		map: {
			1: {
				tag: 'L80301',
				opts: nodeL8Port.opts,
				style: nodeL8Port.style
			},
			2: {
				tag: 'L80302',
				opts: nodeL8Port.opts,
				style: nodeL8Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL8PortGroup04 = {
		body: [
			[1],
			[2]
		],
		map: {
			1: {
				tag: 'L80401',
				opts: nodeL8Port.opts,
				style: nodeL8Port.style
			},
			2: {
				tag: 'L80402',
				opts: nodeL8Port.opts,
				style: nodeL8Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	return {
		body: [
			[1,6,2],
			[9,0,7],
			[4,8,3]
		],
		map: {
			1: {tag: '1', size:{x:0,y:0}},
			2: {tag: '2', size:{x:0,y:0}},
			3: {tag: '3', size:{x:0,y:0}},
			4: {tag: '4', size:{x:0,y:0}},
			6: nodeL8PortGroup01,
			7: nodeL8PortGroup02,
			8: nodeL8PortGroup03,
			9: nodeL8PortGroup04
		},
		link: [
			{
				path: ['1','2','3','4'],
				opts: {
					close: 1
				},
				style: {
					'stroke-width': 4,
					'stroke': 'mGreen-700',
					'fill': 'mGreen-400'
				}
			}
		],
		opts: {gap: {x:1, y:1}}
	};
}
