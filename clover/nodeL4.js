function nodeL4() {
	var nodeL4Port = {
		opts: {
			radius: 5
		},
		style: {
			'stroke': 'mAmber-700',
			'fill': 'mAmber-400'
		}
	};
	var nodeL4PortGroup01 = {
		body: [
			[1,2]
		],
		map: {
			1: {
				tag: 'L40101',
				opts: nodeL4Port.opts,
				style: nodeL4Port.style
			},
			2: {
				tag: 'L40102',
				opts: nodeL4Port.opts,
				style: nodeL4Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL4PortGroup02 = {
		body: [
			[1],
			[2]
		],
		map: {
			1: {
				tag: 'L40201',
				opts: nodeL4Port.opts,
				style: nodeL4Port.style
			},
			2: {
				tag: 'L40202',
				opts: nodeL4Port.opts,
				style: nodeL4Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL4PortGroup03 = {
		body: [
			[1,2]
		],
		map: {
			1: {
				tag: 'L40301',
				opts: nodeL4Port.opts,
				style: nodeL4Port.style
			},
			2: {
				tag: 'L40302',
				opts: nodeL4Port.opts,
				style: nodeL4Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL4PortGroup04 = {
		body: [
			[1],
			[2]
		],
		map: {
			1: {
				tag: 'L40401',
				opts: nodeL4Port.opts,
				style: nodeL4Port.style
			},
			2: {
				tag: 'L40402',
				opts: nodeL4Port.opts,
				style: nodeL4Port.style
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
			6: nodeL4PortGroup01,
			7: nodeL4PortGroup02,
			8: nodeL4PortGroup03,
			9: nodeL4PortGroup04
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
