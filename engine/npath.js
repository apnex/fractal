// Add ability for input schema to define pixel size {x, y}
// Change opts: {radius} to be a relative unit of size{x, y} instead of absolute
// NOTE - this is a renderer - it DOES NOT perform syntax checking - i.e it requires correct and full input schema
var self = {
	initx: 10,
	inity: 10,
	x: 10,
	y: 10,
	opts: {
		close	: 1,
		handles	: 0,
		radius	: 0
	},
	close: 0
};
self.pos = function(pos) { // change to reflect pos = {x: x, y: y}
	var posx = self.initx + (self.x * pos[0]);
	var posy = self.inity + (self.y * pos[1]);
	return [posx, posy];
}
var nodes = [];
nodes.add = function(node) {
	this.push(node);
	return node;
}
var paths = [];
paths.add = function(path) {
	this.push(path);
	return path;
}
var npath = {
	createPath: function(attributes) {
		let type = 'path';
		paths.add(nsvg.createNode(type, attributes));
	},
	createCircle: function(attributes) {
		let type = 'circle';
		nodes.add(nsvg.createNode(type, attributes));
	},
	getCoord: function(handle, next, radius) {
		var pos1 = self.pos(handle);
		var pos2 = self.pos(next);
		var r1x = pos1[0] - pos2[0];
		var r1y = pos1[1] - pos2[1];

		// find angle
		if(r1x == 0 && r1y == 0) { // two identical coords - catch div/zero error
			r1y =  1;
		}
		var ang = Math.atan(r1x / r1y);
		var opp = Math.sin(ang) * radius;
		var adj = Math.cos(ang) * radius;
		var mx = Math.abs(Math.round(opp));
		var my = Math.abs(Math.round(adj));
		if(r1x < 0) {
			pos1[0] += mx;
		} else {
			pos1[0] -= mx;
		}
		if(r1y < 0) {
			pos1[1] += my;
		} else {
			pos1[1] -= my;
		}
		return pos1;
	},
	buildCorner: function(prev, handle, next, opts) {
		// build corner
		var pos = self.pos(handle);
		var pos1 = npath.getCoord(handle, prev, opts.radius);
		var pos2 = npath.getCoord(handle, next, opts.radius);

		// draw handles
		if(opts.handles) {
			let aCircle = {
				'id':			'blah',
				'class':		'mRed-900',
				'cx':			pos[0],
				'cy':			pos[1],
				'r':			opts.radius,
				//'stroke': 		'red',
				'stroke-width':		1,
				'stroke-dasharray':	'5,2',
				//'fill':		'red',
				'fill-opacity':	'0.2'
			};
			npath.createCircle('circle', aCircle);

			let cHandle = {
				'id':			'blah',
				'r':			2,
				//'fill':		'blue',
				//'fill-opacity':	'0.1',
				//'stroke': 		'blue',
				'stroke-width':		1
			};

			// need to create a JSON 'deep merge and copy' function to replace below hack
			var bCircle = JSON.parse(JSON.stringify(cHandle));
			var cCircle = JSON.parse(JSON.stringify(cHandle));
			var dCircle = JSON.parse(JSON.stringify(cHandle));
			bCircle['cx'] = pos[0];
			bCircle['cy'] = pos[1];
			bCircle['class'] = 'mRed-500';
			cCircle['cx'] = pos1[0];
			cCircle['cy'] = pos1[1];
			cCircle['class'] = 'mGreen-500';
			dCircle['cx'] = pos2[0];
			dCircle['cy'] = pos2[1];
			dCircle['class'] = 'mGreen-500';
			npath.createCircle('circle', bCircle);
			npath.createCircle('circle', cCircle);
			npath.createCircle('circle', dCircle);
		}
		var corner = ' L' + pos1[0] + ' ' + pos1[1] + ' Q' + pos[0] + ' ' + pos[1] + ' ' + pos2[0] + ' ' + pos2[1];
		return corner;
	},
	buildGroups: function(groupList) {
		for(var i = 0, ilen = groupList.length; i < ilen; i++) {
			npath.buildPaths(groupList[i]);
		} // change to forEach
	},
	buildPaths: function(pathGroup) {

		// syntax and defaults check: radius, handles, close
		if(typeof pathGroup.opts === 'undefined') {
			pathGroup['opts'] = self.opts;
			//console.log(JSON.stringify(pathGroup, null, "  "));
		}
		if(typeof pathGroup.opts.radius === 'undefined') {
			pathGroup.opts['radius'] = self.opts.radius;
		}

		if(pathGroup.size.x > 0 && pathGroup.size.y > 0) { // if size is not 0, draw
			if(pathGroup.path) { // if path exists, draw
				let opts = pathGroup.opts;
				for(var i = 0, ilen = pathGroup.path.length; i < ilen; i++) {
					let path = {
						attributes:	pathGroup.attributes,
						opts:		{
							close	: opts.close,
							handles	: opts.handles,
							radius	: opts.radius
						},
						path:		pathGroup.path[i]
					};
					//console.log(JSON.stringify(path, null, "  "));
					npath.buildPath(path);
				}
			}
		}
	},
	buildPath: function(pathItem) { // builds rendering components
		// syntax checking
		if(typeof pathItem.opts === 'undefined') {
			pathItem['opts'] = self.opts;
		}
		if(typeof pathItem.attributes === 'undefined') {
			pathItem['attributes'] = self.attributes;
		}
		let opts = pathItem.opts;
		let path = pathItem.path;
		// syntax checking

		let pstring;
		for(var j = 0, jlen = path.length; j < jlen; j++) {
			var pos = self.pos(path[j]);
			if(pstring) {
				if(j < jlen - 1) {
					pstring += npath.buildCorner(path[j-1], path[j], path[j+1], opts);
				} else {
					if(opts.close == 1) {
						pstring += npath.buildCorner(path[j-1], path[j], path[0], opts);
						pstring += npath.buildCorner(path[j], path[0], path[1], opts);
						pstring += ' Z';
					} else {
						pstring += ' L' + pos[0] + ' ' + pos[1];
					}
				}
			} else {
				if(opts.close == 1) {
					pos = npath.getCoord(path[j], path[j+1], opts.radius);
				}
				pstring = 'M' + pos[0] + ' ' + pos[1];
			}
		}

		// format parameters
		let params = pathItem.attributes;
		params.d = pstring;

		/* loop through style{} and build style string
		let style = {
			'stroke': colours['mOrange-500'],
			'fill': colours['mOrange-200'],
			'stroke-width': 4
		};
		let newStyle = '';
		let delimiter = '';
		for(let key of Object.keys(style)) {
			newStyle += delimiter + key + ':' + style[key];
			delimiter = '; ';
		}*
		params.style = newStyle;*/
		//console.log(JSON.stringify(params, null, "  "));

		npath.createPath(params);
	},
	render: function() {
		// get canvas
		var canvas = document.getElementById("core");
		//var canvas = document.documentElement;

		// render paths
		for(var n = 0, nlen = paths.length; n <= nlen - 1; n++) {
			canvas.appendChild(paths[n]);
		}

		// render nodes
		for(var n = 0, nlen = nodes.length; n <= nlen - 1; n++) {
			canvas.appendChild(nodes[n]);
		}
	}
}
