function meTest() {
	let group = {
		body: [
			[1,2]
		],
		map: {
			1: {
				tag: "n1"
			},
			2: {
				tag: "n2"
			}
		},
		link: [
			{
				path: ["n1", "n2"]
			}
		],
		opts: {
			gap: {x:2, y:2}
		}
	};
	return group;
}
