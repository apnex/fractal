function require(url) {
	var ajax = new XMLHttpRequest();
	ajax.open( 'GET', url, false ); // <-- the 'false' makes it synchronous
	ajax.onreadystatechange = function () {
		var script = ajax.response || ajax.responseText;
		if (ajax.readyState === 4) {
			switch( ajax.status) {
				case 200:
					eval.apply( window, [script] );
					console.log("script loaded: ", url);
					break;
				default:
					console.log("ERROR: script not loaded: ", url);
			}
		}
	};
	ajax.setRequestHeader('Cache-Control', 'no-cache');
	ajax.send(null);
}
// seed
require("./engine/ngine.js");
require("./engine/nsvg.js");
require("./engine/ncell.js");
require("./engine/npath.js");
require("./engine/nlink.js");
require("./engine/nnode.js");
require("./engine/colours.js");
