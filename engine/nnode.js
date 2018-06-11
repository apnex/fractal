var nnode = { // this module should be structural only - no style or attributes
	new: function(cell) {
		// set all node defaults here

		// set opts
		let myOpts = {
			'close': 1,
			'handles': 0,
			'radius': 0,
			'gap': 0
		};
		if(typeof cell.opts !== 'undefined') {
			for(let key of Object.keys(myOpts)) {
				if(typeof cell.opts[key] !== 'undefined') {
					// direct mapping of values - use switch/given/when? for translate/lookup
					myOpts[key] = cell.opts[key];
				}
			}
		}

		// set style
		let myStyle = {
			'stroke': colours['mOrange-500'],
			'fill': 'none',
			'stroke-width': 2
		};
		if(typeof cell.style !== 'undefined') {
			if(typeof cell.style['stroke'] !== 'undefined') {
				myStyle['stroke'] = colours[cell.style['stroke']];
			}
			if(typeof cell.style['fill'] !== 'undefined') {
				if(cell.style['fill'] == 'none') {
					myStyle['fill'] = 'none';
				} else {
					myStyle['fill'] = colours[cell.style['fill']];
				}
			}
			if(typeof cell.style['stroke-width'] !== 'undefined') {
				myStyle['stroke-width'] = cell.style['stroke-width'];
			}
		}

		// set size
		let mySize;
		if(typeof cell.size !== 'undefined') {
			mySize = cell.size;
		} else {
			mySize = {x: 2, y: 2};
		}

		// build path
		let xSize = mySize.x / 2;
		let ySize = mySize.y / 2;
		let myPath = [];
		myPath.push([xSize * -1, ySize * -1]);
		myPath.push([xSize * -1, ySize * 1]);
		myPath.push([xSize * 1,  ySize * 1]);
		myPath.push([xSize * 1,  ySize * -1]);

		// build node
		let defNode = { // need to reconsider pos/size and body/payload construct
			pos: {x: 0, y: 0},
			size: mySize,
			body: [{
				pos	: {x: 0, y: 0},
				size	: mySize,
				style	: {style: myStyle},
				path	: myPath,
				opts	: myOpts
			}]
		};

		return defNode;
	}
}
