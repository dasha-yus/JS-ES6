// Deep comparison
function deepEqual(arg1, arg2) {
	if(arg1 === arg2){
		return true;
	}
	var keysArg1 = Object.keys(arg1);
	var keysArg2 = Object.keys(arg2);
	if(keysArg1.length != keysArg2.length){
		return false;
	} else {
		for (var key of keysArg1) {
			if (!keysArg2.includes(key)){
				return false;
			} else if(!deepEqual(arg1[key], arg2[key])){
				return false;
			}
		}
	}
	if (typeof arg1 == "object" && arg1 != null || typeof arg2 == "object" && arg2 != null) {
  		return true;
  	}
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true