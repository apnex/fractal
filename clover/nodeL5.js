function nodeL5() {
	var nodeL5Port = {
		opts: {
			radius: 5
		},
		style: {
			'stroke': 'mAmber-700',
			'fill': 'mAmber-400'
		}
	};
	var nodeL5PortGroup01 = {
		body: [
			[1,2]
		],
		map: {
			1: {
				tag: 'L50101',
				opts: nodeL5Port.opts,
				style: nodeL5Port.style
			},
			2: {
				tag: 'L50102',
				opts: nodeL5Port.opts,
				style: nodeL5Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL5PortGroup02 = {
		body: [
			[1],
			[2]
		],
		map: {
			1: {
				tag: 'L50201',
				opts: nodeL5Port.opts,
				style: nodeL5Port.style
			},
			2: {
				tag: 'L50202',
				opts: nodeL5Port.opts,
				style: nodeL5Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL5PortGroup03 = {
		body: [
			[1,2]
		],
		map: {
			1: {
				tag: 'L50301',
				opts: nodeL5Port.opts,
				style: nodeL5Port.style
			},
			2: {
				tag: 'L50302',
				opts: nodeL5Port.opts,
				style: nodeL5Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL5PortGroup04 = {
		body: [
			[1],
			[2]
		],
		map: {
			1: {
				tag: 'L50401',
				opts: nodeL5Port.opts,
				style: nodeL5Port.style
			},
			2: {
				tag: 'L50402',
				opts: nodeL5Port.opts,
				style: nodeL5Port.style
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
			6: nodeL5PortGroup01,
			7: nodeL5PortGroup02,
			8: nodeL5PortGroup03,
			9: nodeL5PortGroup04
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
