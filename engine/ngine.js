var fractal = {
	render: function(schema) {
		// build diagram
		var myCell = ncell.buildCell(schema);
		// myCell now returns pos and size
		//console.log(JSON.stringify(myCell, null, "  "));

		// link testing
		//let vertices = nlink.path(myCell, ['1', '2', '3', '4']);
		//let link = nlink.new(vertices);
		//npath.buildPath(link);

		// build svg paths + render
		npath.buildGroups(myCell);

		npath.render();
	}
}

//useful functions
function override(obj1, obj2) {
        for(var p in obj2) {
                if(obj2[p].constructor == Object) {
                        if(obj1[p]) {
                                override(obj1[p], obj2[p]);
                                continue;
                        }
                }
                obj1[p] = obj2[p];
        }
}

