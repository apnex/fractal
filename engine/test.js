#!/usr/bin/env node
/*
* Recursively collate properties of two objects 
*/
function collate(obj1, obj2) {
  for (var p in obj2) {
      if ( obj2[p].constructor == Object ) {
          if (obj1[p]) {
              collate(obj1[p], obj2[p]);
              continue;
          }
      }
	if(typeof obj1[p] === 'undefined') {
		obj1[p] = obj2[p];
	}
  }
};

var cell = {
	size: {x: 4, y: 4},
	style: {
		"stroke": "mBlue-500"
	}
};

var mgrid = {
	size: {x: 4, y: 4},
	style: {
		"stroke": "mRed-500",
		"stroke-width": 5
	},
	opts: {
		gap: {x:2, y:1}
	}
};

collate(cell, mgrid);

console.log(cell);
