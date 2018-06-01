function nodePath() {
	return {
		body: [
			[0,1,2,0],
			[11,12,3,4],
			[10,9,6,5],
			[0,8,7,0]
		],
		map: {
			1: {tag:"1"},
			2: {tag:"2"},
			3: {tag:"3"},
			4: {tag:"4"},
			5: {tag:"5"},
			6: {tag:"6"},
			7: {tag:"7"},
			8: {tag:"8"},
			9: {tag:"9"},
			10: {tag:"10"},
			11: {tag:"11"},
			12: {tag:"12"}
		},
		link: [
			{
				path: ["1","2","3","4","5","6","7","8","9","10","11","12"],
				opts: {
					close: 1,
					radius: 10
				},
				style: {
					'stroke-width': 8,
					'stroke': 'mLight-Green-800',
					'fill': 'mLight-Green-400'
				}
			}
		],
		size: {x:0, y:0},
		opts: {
			gap: {x:6, y:6}
		},
		style: {
			"stroke": "mBlue-500"
		}
	};
}
