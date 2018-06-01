var svgurl = 'http://www.w3.org/2000/svg';
var xurl = 'http://www.w3.org/1999/xlink';
var nsvg = {
	createNode: function(type, a) {
		var aNode = document.createElementNS(svgurl, type);
		for(let key in a) {
			aNode.setAttribute(key, a[key]);
		}
		return aNode;
	},
	createUse: function(type, a) {
		var aNode = nsvg.createNode('use', a);
		aNode.setAttributeNS(xurl, 'xlink:href', '#' + type);
		return aNode;
	}
}
