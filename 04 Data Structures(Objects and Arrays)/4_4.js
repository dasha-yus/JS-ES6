// Deep comparison
function deepEqual(arg1, arg2) {
	if(arg1 === arg2){
		return true;
	}
	if(arg1 == null || typeof arg1 != "object" || arg2 == null || typeof arg2 != "object") {
		return false;
	}
	var keysArg1 = Object.keys(arg1);
	var keysArg2 = Object.keys(arg2);
	if(keysArg1.length != keysArg2.length){
		return false;
	}
	for (var key of keysArg1) {
		if (!keysArg2.includes(key) || !deepEqual(arg1[key], arg2[key])){
			return false;
		} 
	}
	return true;
}

console.log(deepEqual(null, null));
// → true
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
let obj1 = {here: {is: null}, object: 2};
console.log(deepEqual(obj, obj1));
// → false
