function nodeArrowRight(opts) {
	let schema = {
		body: [
			[0,0,2,0,0],
			[7,0,1,0,0],
			[0,8,0,9,3],
			[6,0,5,0,0],
			[0,0,4,0,0]
		],
		map: {
			1: {tag: "1"},
			2: {tag: "2"},
			3: {tag: "3"},
			4: {tag: "4"},
			5: {tag: "5"},
			6: {tag: "6"},
			7: {tag: "7"},
			8: {
				size: {x: 10, y: 0},
				style: {
					"stroke": "none"
				}
			},
			9: {
				size: {x: 2, y: 0},
				style: {
					"stroke": "none"
				}
			}
		},
		link: [
			{
				path: ["1", "2", "3", "4", "5", "6", "7"],
				opts: {
					close: 1,
					radius: 5
				},
				style: {
					"stroke": "mLight-Green-500",
					"stroke-width": 6,
					"fill": "mLight-Green-500"
				}
			}
		],
		size: {x:0, y:0},
		opts: {
			gap: {x:2, y:2}
		}
	};
	override(schema, opts);
	return schema;
}
