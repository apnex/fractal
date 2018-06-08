head.load(["schemas/nodeAtom.js"]);
function nodeMolecule() {
	let blah = {
		body: [
			[1,6,2],
			[5,0,7],
			[4,8,3]
		],
		map: {
			0: nodeAtom(),
			1: {tag: "n11"},
			2: {tag: "n12"},
			3: {tag: "n13"},
			4: {tag: "n14"}
		},
		link: [
			{
				path: ["n11","n12","n13","n14"],
				opts: {
					close: 1
				},
				style: {
					'stroke-width': 4,
					'stroke': 'mLight-Blue-600',
					'fill': 'mWhite'
				}
			}
		],
		size: {x:0, y:0},
		opts: {
			gap: {x:2, y:2}
		}
	};
	let a1 = JSON.parse(JSON.stringify(blah));
	a1.tag = "a1";
	let a2 = JSON.parse(JSON.stringify(blah));
	a2.tag = "a2";
	let a3 = JSON.parse(JSON.stringify(blah));
	a3.tag = "a3";
	let a4 = JSON.parse(JSON.stringify(blah));
	a4.tag = "a4";
	return {
		body: [
			[1,6,2],
			[5,0,7],
			[4,8,3]
		],
		map: {
			1: a1,
			2: a2,
			3: a3,
			4: a4
		},
		link: [
			{
				path: ["a1","a2","a3","a4"],
				opts: {
					close: 1
				},
				style: {
					'stroke-width': 4,
					'stroke': 'mLight-Green-600',
					'fill': 'mLight-Green-300'
				}
			}
		],
		opts: {
			gap: {x:2, y:2}
		}
	};
}
