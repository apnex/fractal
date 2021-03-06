var ncell = {
	buildCell: function(cell) {
		// move to ngine?!?!?!?
		// build path definition
		let grid = cell;
		let mynodes = ncell.buildNodes(grid);
		let paths = mynodes.body;

		// shift from [0,0]
		let ttlx = mynodes.size.x;
		let ttly = mynodes.size.y;
		let deltax = Math.floor(ttlx / 2);
		let deltay = Math.floor(ttly / 2);
		for(let i = 0, len = paths.length; i < len; i++) {
			let path = paths[i].path;
			for(let j = 0, jlen = path.length; j < jlen; j++) {
				path[j][0] += deltax;
				path[j][1] += deltay;
			}
			// shift pos also!
			paths[i].pos.x += deltax;
			paths[i].pos.y += deltay;
		}

		// crop <svg> height/width to match rendered image size
		let svg = document.getElementById('core');
		svg.setAttribute('width', ((ttlx * self.x) + (2 * self.initx)));
		svg.setAttribute('height', ((ttly * self.y) + (2 * self.inity)));
		//console.log("SIZE: " + (ttlx * self.x) + " | " + (ttly * self.y));

		// build final render definition
		// separate this out into a separate module - that automatically builds the paths
		// then remove path translation from this module
		// also, why am I reconstructing the cell syntax again after I've already built the node? Consider removal and separation
		// non-structural syntax check to be offloaded (opts)
		//console.log(JSON.stringify(paths, null, "  "));
		let diag = [];
		for(let i = 0, ilen = paths.length; i < ilen; i++) {
			diag.push({
				attributes:	paths[i].style, //clean up and remove
				style:		paths[i].style,
				pos:		paths[i].pos,
				size:		paths[i].size,
				opts:		paths[i].opts,
				tag:		paths[i].tag,
				path:		[paths[i].path]
			});
		}
		//console.log(JSON.stringify(diag, null, "  "));
		return diag;
	},
	collate: function(obj1, obj2) { //havent worked this out yet - need to allow for "defaults"
		for(var p in obj2) {
			if(obj2[p].constructor == Object) {
				if(obj1[p]) {
					collate(obj1[p], obj2[p]);
					continue;
				}
			}
			if(typeof obj1[p] === 'undefined') {
				obj1[p] = obj2[p];
			}
		}
	},
	buildNodes: function(mgrid) {
		// check for body or map first - error handling
		if(typeof mgrid.body === 'undefined') {
			mgrid.body = [[1]];
		}
		if(typeof mgrid.map === 'undefined') {
			mgrid.map = {1:{}};
		}

		let grid = mgrid.body;
		let smap = mgrid.map;
		let cellState = {};
		for(let key of Object.keys(smap)) {
			let cell = smap[key];
			// convert following to selective nested merge function
			if(typeof cell.size === 'undefined') {
				if(typeof mgrid.size !== 'undefined') {
					cell.size = mgrid.size;
				}
			}
			if(typeof cell.style === 'undefined') {
				if(typeof mgrid.style !== 'undefined') {
					cell.style = mgrid.style;
				}
			}
			if(typeof cell.opts === 'undefined') {
				if(typeof mgrid.opts !== 'undefined') {
					cell.opts = mgrid.opts;
				}
			}
			if(typeof cell.map !== 'undefined' || typeof cell.tag != 'undefined') {
				// tree recursion
				cellState[key] = ncell.buildNodes(cell);
			} else {
				// is a leaf node - build node
				cellState[key] = nnode.new(cell);
			}
		}

		// work out grid height / widths
		let xsize = {};
		let ysize = {};
		for(let i = 0, ilen = grid.length; i < ilen; i++) {
			for(let j = 0, jlen = grid[i].length; j < jlen; j++) {
				if(!xsize[j]) {
					xsize[j] = 0;
				}
				if(!ysize[i]) {
					ysize[i] = 0;
				}
				let idx = grid[i][j];
				if(smap[idx]) { // if exist in map
					let cellx = cellState[idx].size.x
					let celly = cellState[idx].size.y
					if(xsize[j] < cellx) {
						xsize[j] = cellx; // update cell width
					}
					if(ysize[i] < celly) {
						ysize[i] = celly; // update cell height
					}
				}
			}
		}

		// SYNTAX - check gap in local scope
		let gap = {x:0, y:0};
		if(typeof mgrid.opts === 'undefined') {
			mgrid.opts = {};
		}
		if(typeof mgrid.opts.gap !== 'undefined') {
			gap = mgrid.opts.gap;
		}

		// work out y anchor
		let anchory = [];
		let county = 0;
		let yCheck = 0;
		for(let i = 0, ilen = grid.length; i < ilen; i++) {
			if(yCheck) {
				 county += gap.y;
			}
			anchory.push(county + Math.floor(ysize[i] / 2));
			county += ysize[i];
			yCheck = 1;
		}

		// work out x anchor
		let anchorx = [];
		let countx = 0;
		let xCheck = 0;
		for(let i = 0, ilen = grid[0].length; i < ilen; i++) {
			if(xCheck) {
				 countx += gap.x;
			}
			anchorx.push(countx + Math.floor(xsize[i] / 2));
			countx += xsize[i];
			xCheck = 1;
		}

		// place nodes and shift position and paths
		// collapse nodes into grpCache
		// separate path shift into separate module - i.e just shift all pos here, then separately parse and build paths
		let grpCache = [];
		for(let i = 0, ilen = grid.length; i < ilen; i++) {
			for(let j = 0, jlen = grid[i].length; j < jlen; j++) {
				let idx = grid[i][j];
				if(smap[idx]) { // if exist in map
					let unitx = anchorx[j];
					let unity = anchory[i];
					let cells = cellState[idx].body; // change "body" to "payload" - ie differentiate forward from reverse structure
					//let cells = cellState[idx];
					for(let p = 0, plen = cells.length; p < plen; p++) {
						var newCell = JSON.parse(JSON.stringify(cells[p])); // copy node -- replace with nnode.js function to build new node
						newCell.pos.x += unitx;
						newCell.pos.y += unity;
						for(let q = 0, qlen = newCell.path.length; q < qlen; q++) { //  a hack to support multi length paths
							newCell.path[q][0] += unitx;
							newCell.path[q][1] += unity;
						} // entire loop structure to be optimised / re-written!!
						grpCache.push(newCell);
					}
				}
			}
		}


		// reset / reanchor image to [0,0]
		for(let i = 0, len = grpCache.length; i < len; i++) {
			let deltax = Math.floor(countx / 2);
			let deltay = Math.floor(county / 2);
			let path = grpCache[i].path;
			for(let j = 0, jlen = path.length; j < jlen; j++) {
				path[j][0] -= deltax;
				path[j][1] -= deltay;
			}
			grpCache[i].pos.x -= deltax;
			grpCache[i].pos.y -= deltay;
		}

		// build links
		// check if link exists at current scope
		// optimise: move attributes out to JSON definition - streamline attribute handling
		if(typeof mgrid.link !== 'undefined') { // if there are links
			for(let i = 0, ilen = mgrid.link.length; i < ilen; i++) { // loop through links and build
				let vertices = nlink.path(grpCache, mgrid.link[i].path);
				if(vertices.length > 0) { // again, consider where structural versus styling should reside
					grpCache.unshift(nlink.new(vertices, mgrid.link[i])); // place link underneath nodes
				}
			}
			// wipe tags after they are used? dirty eh?
			for(let item of grpCache) {
				if(item.tag) {
					//delete(item.tag); //This breaks clover.html - because of need for global tags
				}
			}
		}

		// work out if tag present
		if(typeof mgrid.tag !== 'undefined') {
			let tagCell = nnode.new({
				body: [[1]],
				map: {1:{}},
				size: {x:0, y:0}
			});
			tagCell.body[0].tag = mgrid.tag;
			grpCache.push(tagCell.body[0]); // this is a hack to make nnode work
		}

		//console.log(JSON.stringify(grpCache, null, "  "));
		let grpState = {
			pos: {x: 0, y: 0},
			size: {x: countx, y: county},
			body: grpCache
		}
		return grpState;
	}
}

