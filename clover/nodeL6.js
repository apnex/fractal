function nodeL6() {
	var nodeL6Port = {
		opts: {
			radius: 5
		},
		style: {
			'stroke': 'mAmber-700',
			'fill': 'mAmber-400'
		}
	};
	var nodeL6PortGroup01 = {
		body: [
			[1,2]
		],
		map: {
			1: {
				tag: 'L60101',
				opts: nodeL6Port.opts,
				style: nodeL6Port.style
			},
			2: {
				tag: 'L60102',
				opts: nodeL6Port.opts,
				style: nodeL6Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL6PortGroup02 = {
		body: [
			[1],
			[2]
		],
		map: {
			1: {
				tag: 'L60201',
				opts: nodeL6Port.opts,
				style: nodeL6Port.style
			},
			2: {
				tag: 'L60202',
				opts: nodeL6Port.opts,
				style: nodeL6Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL6PortGroup03 = {
		body: [
			[1,2]
		],
		map: {
			1: {
				tag: 'L60301',
				opts: nodeL6Port.opts,
				style: nodeL6Port.style
			},
			2: {
				tag: 'L60302',
				opts: nodeL6Port.opts,
				style: nodeL6Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL6PortGroup04 = {
		body: [
			[1],
			[2]
		],
		map: {
			1: {
				tag: 'L60401',
				opts: nodeL6Port.opts,
				style: nodeL6Port.style
			},
			2: {
				tag: 'L60402',
				opts: nodeL6Port.opts,
				style: nodeL6Port.style
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
			6: nodeL6PortGroup01,
			7: nodeL6PortGroup02,
			8: nodeL6PortGroup03,
			9: nodeL6PortGroup04
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
