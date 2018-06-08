head.load(["schemas/nodeAtom.js"]);
function nodeMolecule(opts) {
	let schema = {
		body: [
			[1,6,2],
			[5,0,7],
			[4,8,3]
		],
		map: {
			1: nodeAtom(),
			2: nodeAtom(),
			3: nodeAtom(),
			4: nodeAtom()
		},
		opts: {
			gap: {x:2, y:2}
		}
	};
	override(schema, opts);
	return schema;
}
