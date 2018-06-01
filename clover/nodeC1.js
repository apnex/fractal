function nodeC1() {
	var nodeC1Port = {
		opts: {
			radius: 5
		},
		style: {
			'stroke': 'mAmber-700',
			'fill': 'mAmber-400'
		}
	};
	var nodeC1PortGroup01 = {
		body: [
			[1,2,3,4]
		],
		map: {
			1: {
				tag: 'C10101',
				opts: nodeC1Port.opts,
				style: nodeC1Port.style
			},
			2: {
				tag: 'C10102',
				opts: nodeC1Port.opts,
				style: nodeC1Port.style
			},
			3: {
				tag: 'C10103',
				opts: nodeC1Port.opts,
				style: nodeC1Port.style
			},
			4: {
				tag: 'C10104',
				opts: nodeC1Port.opts,
				style: nodeC1Port.style
			}
		},
		opts: {gap: {x:1,y:1}}
	};
	var nodeC1PortGroup02 = {
		body: [
			[1],
			[2],
			[3],
			[4]
		],
		map: {
			1: {
				tag: 'C10201',
				opts: nodeC1Port.opts,
				style: nodeC1Port.style
			},
			2: {
				tag: 'C10202',
				opts: nodeC1Port.opts,
				style: nodeC1Port.style
			},
			3: {
				tag: 'C10203',
				opts: nodeC1Port.opts,
				style: nodeC1Port.style
			},
			4: {
				tag: 'C10304',
				opts: nodeC1Port.opts,
				style: nodeC1Port.style
			}
		},
		opts: {gap: {x:1,y:1}}
	};
	var nodeC1PortGroup03 = {
		body: [
			[1,2,3,4]
		],
		map: {
			1: {
				tag: 'C10301',
				opts: nodeC1Port.opts,
				style: nodeC1Port.style
			},
			2: {
				tag: 'C10302',
				opts: nodeC1Port.opts,
				style: nodeC1Port.style
			},
			3: {
				tag: 'C10303',
				opts: nodeC1Port.opts,
				style: nodeC1Port.style
			},
			4: {
				tag: 'C10304',
				opts: nodeC1Port.opts,
				style: nodeC1Port.style
			}
		},
		opts: {gap: {x:1,y:1}}
	};
	var nodeC1PortGroup04 = {
		body: [
			[1],
			[2],
			[3],
			[4]
		],
		map: {
			1: {
				tag: 'C10401',
				opts: nodeC1Port.opts,
				style: nodeC1Port.style
			},
			2: {
				tag: 'C10402',
				opts: nodeC1Port.opts,
				style: nodeC1Port.style
			},
			3: {
				tag: 'C10403',
				opts: nodeC1Port.opts,
				style: nodeC1Port.style
			},
			4: {
				tag: 'C10404',
				opts: nodeC1Port.opts,
				style: nodeC1Port.style
			}
		},
		opts: {gap: {x:1,y:1}}
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
			6: nodeC1PortGroup01,
			7: nodeC1PortGroup02,
			8: nodeC1PortGroup03,
			9: nodeC1PortGroup04
		},
		link: [
			{
				path: ['1','2','3','4'],
				opts: {
					close: 1
				},
				style: {
					'stroke-width': 4,
					'stroke': 'mBlue-700',
					'fill': 'mBlue-400'
				}
			}
		],
		opts: {gap: {x:1, y:1}}
	};
}
