head.load(["schemas/nodeMolecule.js"]);
function nodeMatter() {
	let blah = {
		body: [
			[1,6,2],
			[5,0,7],
			[4,8,3]
		],
		map: {
			0: nodeMolecule(),
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
	a1.tag = "g1";
	let a2 = JSON.parse(JSON.stringify(blah));
	a2.tag = "g2";
	let a3 = JSON.parse(JSON.stringify(blah));
	a3.tag = "g3";
	let a4 = JSON.parse(JSON.stringify(blah));
	a4.tag = "g4";
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
				path: ["g1","g2","g3","g4"],
				opts: {
					close: 1
				},
				style: {
					'stroke-width': 4,
					'stroke': 'mRed-500',
					'fill': 'mRed-200'
				}
			}
		],
		opts: {
			gap: {x:2, y:2}
		}
	};
}
