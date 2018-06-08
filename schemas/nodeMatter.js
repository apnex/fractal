head.load(["schemas/nodeMolecule.js"]);
function nodeMatter(opts) {
	let schema = {
		body: [
			[1,6,2],
			[5,0,7],
			[4,8,3]
		],
		map: {
			0: nodeMolecule({
				map: {
					1: {map: {0:nodeMolecule()}},
					2: {map: {0:nodeMolecule()}},
					3: {map: {0:nodeMolecule()}},
					4: {map: {0:nodeMolecule()}}
				}
			}),
			1: {tag: "n21"},
			2: {tag: "n22"},
			3: {tag: "n23"},
			4: {tag: "n24"}
		},
		link: [
			{
				path: ["n21","n22","n23","n24"],
				opts: {
					close: 1,
					radius: 10
				},
				style: {
					'stroke-width': 4,
					'stroke': 'mLight-Blue-600',
					'fill': 'mGreen-200'
				}
			}
		],
		size: {x:2, y:2},
		opts: {
			gap: {x:2, y:2}
		}
	};
	override(schema, opts);
	return schema;
}
