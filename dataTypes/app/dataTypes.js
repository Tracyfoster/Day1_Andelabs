'use strict'

module.exports = {

dataTypes: function(param) { 	
 	if (typeof param === "string") {
 		return param.length;
 	}
 	if (param === null || typeof param === "undefined") {
 		return "no value";
 	}
 	if (typeof param === "boolean") {
 		return param;
 	} 
 	if (typeof param === "number") {
 		if (param < 100) {
 			return "less than 100";
 		}
 		else if (param > 100) {
 			return "more than 100";
 		}
 		else 
 			return "equal to 100";
 	}
 	if (Array.isArray(param) === true){
 		var index3 = param[2];
 		if (index3 !== null){
 			return index3;
 		}
 		else 
 			return undefined;
 	}
 	if (typeof param === "function"){
 		return param(true);
 	}

  }
 } 