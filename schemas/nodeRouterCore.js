function nodeRouterCore(opts) {
	let schema = {
		body: [
			[1,6,2],
			[5,0,7],
			[4,8,3]
		],
		map: {
			1: {tag: "1"},
			2: {tag: "2"},
			3: {tag: "3"},
			4: {tag: "4"}
		},
		link: [
			{
				path: ["1", "2", "3", "4"],
				opts: {
					close: 1,
					radius: 60
				},
				style: {
					"stroke": "mLight-Green-500",
					"stroke-width": 18,
					"fill": "mBlack"
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
