function nodeL7() {
	var nodeL7Port = {
		opts: {
			radius: 5
		},
		style: {
			'stroke': 'mAmber-700',
			'fill': 'mAmber-400'
		}
	};
	var nodeL7PortGroup01 = {
		body: [
			[1,2]
		],
		map: {
			1: {
				tag: 'L70101',
				opts: nodeL7Port.opts,
				style: nodeL7Port.style
			},
			2: {
				tag: 'L70102',
				opts: nodeL7Port.opts,
				style: nodeL7Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL7PortGroup02 = {
		body: [
			[1],
			[2]
		],
		map: {
			1: {
				tag: 'L70201',
				opts: nodeL7Port.opts,
				style: nodeL7Port.style
			},
			2: {
				tag: 'L70202',
				opts: nodeL7Port.opts,
				style: nodeL7Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL7PortGroup03 = {
		body: [
			[1,2]
		],
		map: {
			1: {
				tag: 'L70301',
				opts: nodeL7Port.opts,
				style: nodeL7Port.style
			},
			2: {
				tag: 'L70302',
				opts: nodeL7Port.opts,
				style: nodeL7Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeL7PortGroup04 = {
		body: [
			[1],
			[2]
		],
		map: {
			1: {
				tag: 'L70401',
				opts: nodeL7Port.opts,
				style: nodeL7Port.style
			},
			2: {
				tag: 'L70402',
				opts: nodeL7Port.opts,
				style: nodeL7Port.style
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
			6: nodeL7PortGroup01,
			7: nodeL7PortGroup02,
			8: nodeL7PortGroup03,
			9: nodeL7PortGroup04
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
