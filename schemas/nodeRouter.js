head.load(["schemas/nodeArrowUp.js"]);
head.load(["schemas/nodeArrowDown.js"]);
head.load(["schemas/nodeArrowLeft.js"]);
head.load(["schemas/nodeArrowRight.js"]);
head.load(["schemas/nodeRouterCore.js"]);
function nodeRouter(opts) {
	let schema = {
		body: [
			[9,1,6],
			[4,5,2],
			[8,3,7]
		],
		map: {
			1: nodeArrowUp({
				map: {
					8: {size: {y:4}},
				}
			}),
			2: nodeArrowRight({
				map: {
					8: {size: {x:4}}
				}
			}),
			3: nodeArrowDown({
				map: {
					8: {size: {y:4}}
				}
			}),
			4: nodeArrowLeft({
				map: {
					8: {size: {x:4}}
				}
			}),
			5: nodeRouterCore({
				map: {
					5: {tag: "c5"},
					6: {tag: "c6"},
					7: {tag: "c7"},
					8: {tag: "c8"}
				},
				opts: {gap: {x:8, y:8}}
			}),
			6: {tag: "e01"},
			7: {tag: "e02"},
			8: {tag: "e03"},
			9: {tag: "e04"}
		},
		link: [
			{
				path: ["e01", "c6", "c5", "e03", "c8", "c7"],
				opts: {
					close: 1,
					radius: 80
				},
				style: {
					"stroke": "mLight-Green-500",
					"stroke-width": 18
				}
			},
			{
				path: ["e02", "c7", "c6", "e04", "c5", "c8"],
				opts: {
					close: 1,
					radius: 80
				},
				style: {
					"stroke": "mLight-Green-500",
					"stroke-width": 18
				}
			}
		],
		size: {x:0, y:0},
		opts: {
			gap: {x:0, y:0}
		}
	};
	let router = {
		body: [
			[1,6,2],
			[5,0,7],
			[4,8,3]
		],
		map: {
			0: schema,
			1: {tag: "o1"},
			2: {tag: "o2"},
			3: {tag: "o3"},
			4: {tag: "o4"}
		},
		link: [
			{
				path: ["o1", "o2", "o3", "o4"],
				opts: {
					close: 1,
					radius: 150
				},
				style: {
					"stroke": "mLight-Green-500",
					"stroke-width": 12,
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
	return router;
}
