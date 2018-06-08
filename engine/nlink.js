var nlink = { // this module should be structural only - no style or attributes
	new: function(vertices, cell) {
		// set opts
		let myOpts = {
			'close': 0,
			'handles': 0,
			'radius': 10,
			'gap': 0
		};
		if(typeof cell.opts !== 'undefined') {
			for(let key of Object.keys(myOpts)) {
				if(typeof cell.opts[key] !== 'undefined') {
					// direct mapping of values - use given when? for translate/lookup
					myOpts[key] = cell.opts[key];
				}
			}
		}

		// override defaults where appropriate
		let style = {
			'stroke': colours['mBlue-500'],
			'fill': 'none', // default to transparent
			'stroke-width': 4
		};
		if(typeof cell.style !== 'undefined') {
			if(typeof cell.style['stroke'] !== 'undefined') {
				style['stroke'] = colours[cell.style['stroke']];
			}
			if(typeof cell.style['fill'] !== 'undefined') {
				style['fill'] = colours[cell.style['fill']];
			}
			if(typeof cell.style['stroke-width'] !== 'undefined') {
				style['stroke-width'] = cell.style['stroke-width'];
			}
			if(typeof cell.style['stroke-dasharray'] !== 'undefined') {
				style['stroke-dasharray'] = cell.style['stroke-dasharray'];
			}
		}

		// loop through style{} and build style string
		let newStyle = '';
		let delimiter = '';
		for(let key of Object.keys(style)) {
			newStyle += delimiter + key + ':' + style[key];
			delimiter = '; ';
		}
		// set all link defaults here
		let link = {
			style: {style: newStyle},
			attributes: {style: newStyle},
			opts	: myOpts,
			path	: vertices
		};

		nlink.size(link);
		return link;
	},
	size: function(link) {
		let vertices = link.path;
		let minx = 0;
		let maxx = 0;
		let miny = 0;
		let maxy = 0;
		for(var i = 0, ilen = vertices.length; i < ilen; i++) {
			let curx = vertices[i][0];
			let cury = vertices[i][1];
			if(curx <= minx) {
				minx = curx;
			}
			if(curx >= maxx) {
				maxx = curx;
			}
			if(cury <= miny) {
				miny = cury;
			}
			if(cury >= maxy) {
				maxy = cury;
			}
		}
		let sizex = maxx - minx;
		let sizey = maxy - miny;
		let halfx = sizex / 2;
		let halfy = sizey / 2;
		link.pos = {
			x: minx + halfx,
			y: miny + halfy
		};
		link.size = {
			x: sizex,
			y: sizey
		};
		return;
		//return; {x:sizex, y:sizey};
	},
	find: function(myCell, tag) {
		let vertices = [];
		for(var i = 0, ilen = myCell.length; i < ilen; i++) {
			if(typeof myCell[i].tag !== 'undefined') {
				if(myCell[i].tag == tag) {
					vertices.push([myCell[i].pos.x, myCell[i].pos.y]);
				}
			}
		}
		return vertices;
	},
	path: function(myCell, tags) {
		let list = [];
		for(var i = 0, ilen = tags.length; i < ilen; i++) {
			let cells = nlink.find(myCell, tags[i]);
			for(var j = 0, jlen = cells.length; j < jlen; j++) {
				list.push(cells[j]);
			}
		}
		return list;
	}
}
