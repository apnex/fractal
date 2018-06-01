function nodeC2() {
	var nodeC2Port = {
		opts: {
			radius: 5
		},
		style: {
			'stroke': 'mAmber-700',
			'fill': 'mAmber-400'
		}
	};
	var nodeC2PortGroup01 = {
		body: [
			[1,2,3,4]
		],
		map: {
			1: {
				tag: 'C20101',
				opts: nodeC2Port.opts,
				style: nodeC2Port.style
			},
			2: {
				tag: 'C20102',
				opts: nodeC2Port.opts,
				style: nodeC2Port.style
			},
			3: {
				tag: 'C20103',
				opts: nodeC2Port.opts,
				style: nodeC2Port.style
			},
			4: {
				tag: 'C20104',
				opts: nodeC2Port.opts,
				style: nodeC2Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeC2PortGroup02 = {
		body: [
			[1],
			[2],
			[3],
			[4]
		],
		map: {
			1: {
				tag: 'C20201',
				opts: nodeC2Port.opts,
				style: nodeC2Port.style
			},
			2: {
				tag: 'C20202',
				opts: nodeC2Port.opts,
				style: nodeC2Port.style
			},
			3: {
				tag: 'C20203',
				opts: nodeC2Port.opts,
				style: nodeC2Port.style
			},
			4: {
				tag: 'C20204',
				opts: nodeC2Port.opts,
				style: nodeC2Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeC2PortGroup03 = {
		body: [
			[1,2,3,4]
		],
		map: {
			1: {
				tag: 'C20301',
				opts: nodeC2Port.opts,
				style: nodeC2Port.style
			},
			2: {
				tag: 'C20302',
				opts: nodeC2Port.opts,
				style: nodeC2Port.style
			},
			3: {
				tag: 'C20303',
				opts: nodeC2Port.opts,
				style: nodeC2Port.style
			},
			4: {
				tag: 'C20304',
				opts: nodeC2Port.opts,
				style: nodeC2Port.style
			}
		},
		opts: {gap: {x:1, y:1}}
	};
	var nodeC2PortGroup04 = {
		body: [
			[1],
			[2],
			[3],
			[4]
		],
		map: {
			1: {
				tag: 'C20401',
				opts: nodeC2Port.opts,
				style: nodeC2Port.style
			},
			2: {
				tag: 'C20402',
				opts: nodeC2Port.opts,
				style: nodeC2Port.style
			},
			3: {
				tag: 'C20403',
				opts: nodeC2Port.opts,
				style: nodeC2Port.style
			},
			4: {
				tag: 'C20404',
				opts: nodeC2Port.opts,
				style: nodeC2Port.style
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
			6: nodeC2PortGroup01,
			7: nodeC2PortGroup02,
			8: nodeC2PortGroup03,
			9: nodeC2PortGroup04
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
