head.load(["schemas/nodeAtom.js"]);
function nodeOther() {
	return {
		body: [
			[1,6,2],
			[5,0,7],
			[4,8,3]
		],
		map: {
			1: nodeAtom({
				tag: "a1",
				style: {
					'stroke-width': 8,
					'stroke': 'mOrange-400',
					'fill': 'mWhite'
		                }
			}),
			2: nodeAtom({
				tag: "a2"
			}),
			3: nodeAtom({
				tag: "a3"
			}),
			4: nodeAtom({
				tag: "a4"
			})
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
