function nodeL3() {
	var nodeL3Port = {
		opts: {
			radius: 5
		},
		style: {
			'stroke': 'mAmber-700',
			'fill': 'mAmber-400'
		}
	};
	var nodeL3PortGroup01 = {
		body: [
			[1,2]
		],
		map: {
			1: {
				tag: 'L30101',
				opts: nodeL3Port.opts,
				style: nodeL3Port.style
			},
			2: {
				tag: 'L30102',
				opts: nodeL3Port.opts,
				style: nodeL3Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL3PortGroup02 = {
		body: [
			[1],
			[2]
		],
		map: {
			1: {
				tag: 'L30201',
				opts: nodeL3Port.opts,
				style: nodeL3Port.style
			},
			2: {
				tag: 'L30202',
				opts: nodeL3Port.opts,
				style: nodeL3Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL3PortGroup03 = {
		body: [
			[1,2]
		],
		map: {
			1: {
				tag: 'L30301',
				opts: nodeL3Port.opts,
				style: nodeL3Port.style
			},
			2: {
				tag: 'L30302',
				opts: nodeL3Port.opts,
				style: nodeL3Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL3PortGroup04 = {
		body: [
			[1],
			[2]
		],
		map: {
			1: {
				tag: 'L30401',
				opts: nodeL3Port.opts,
				style: nodeL3Port.style
			},
			2: {
				tag: 'L30402',
				opts: nodeL3Port.opts,
				style: nodeL3Port.style
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
			6: nodeL3PortGroup01,
			7: nodeL3PortGroup02,
			8: nodeL3PortGroup03,
			9: nodeL3PortGroup04
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
