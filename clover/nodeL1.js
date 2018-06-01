function nodeL1() {
	var nodeL1Port = {
		opts: {
			radius: 5
		},
		style: {
			'stroke': 'mAmber-700',
			'fill': 'mAmber-400'
		}
	};
	var nodeL1PortGroup01 = {
		body: [
			[1,2]
		],
		map: {
			1: {
				tag: 'L10101',
				opts: nodeL1Port.opts,
				style: nodeL1Port.style
			},
			2: {
				tag: 'L10102',
				opts: nodeL1Port.opts,
				style: nodeL1Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL1PortGroup02 = {
		body: [
			[1],
			[2]
		],
		map: {
			1: {
				tag: 'L10201',
				opts: nodeL1Port.opts,
				style: nodeL1Port.style
			},
			2: {
				tag: 'L10202',
				opts: nodeL1Port.opts,
				style: nodeL1Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL1PortGroup03 = {
		body: [
			[1,2]
		],
		map: {
			1: {
				tag: 'L10301',
				opts: nodeL1Port.opts,
				style: nodeL1Port.style
			},
			2: {
				tag: 'L10302',
				opts: nodeL1Port.opts,
				style: nodeL1Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL1PortGroup04 = {
		body: [
			[1],
			[2]
		],
		map: {
			1: {
				tag: 'L10401',
				opts: nodeL1Port.opts,
				style: nodeL1Port.style
			},
			2: {
				tag: 'L10402',
				opts: nodeL1Port.opts,
				style: nodeL1Port.style
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
			6: nodeL1PortGroup01,
			7: nodeL1PortGroup02,
			8: nodeL1PortGroup03,
			9: nodeL1PortGroup04
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
