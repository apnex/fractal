function nodeL2() {
	var nodeL2Port = {
		opts: {
			radius: 5
		},
		style: {
			'stroke': 'mAmber-700',
			'fill': 'mAmber-400'
		}
	};
	var nodeL2PortGroup01 = {
		body: [
			[1,2]
		],
		map: {
			1: {
				tag: 'L20101',
				opts: nodeL2Port.opts,
				style: nodeL2Port.style
			},
			2: {
				tag: 'L20102',
				opts: nodeL2Port.opts,
				style: nodeL2Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL2PortGroup02 = {
		body: [
			[1],
			[2]
		],
		map: {
			1: {
				tag: 'L20201',
				opts: nodeL2Port.opts,
				style: nodeL2Port.style
			},
			2: {
				tag: 'L20202',
				opts: nodeL2Port.opts,
				style: nodeL2Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL2PortGroup03 = {
		body: [
			[1,2]
		],
		map: {
			1: {
				tag: 'L20301',
				opts: nodeL2Port.opts,
				style: nodeL2Port.style
			},
			2: {
				tag: 'L20302',
				opts: nodeL2Port.opts,
				style: nodeL2Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL2PortGroup04 = {
		body: [
			[1],
			[2]
		],
		map: {
			1: {
				tag: 'L20401',
				opts: nodeL2Port.opts,
				style: nodeL2Port.style
			},
			2: {
				tag: 'L20402',
				opts: nodeL2Port.opts,
				style: nodeL2Port.style
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
			6: nodeL2PortGroup01,
			7: nodeL2PortGroup02,
			8: nodeL2PortGroup03,
			9: nodeL2PortGroup04
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
