// Reversing an array
function reverseArray(array){
	var res = [];
  	for (var i = array.length - 1; i >= 0; i--) {
    	res.push(array[i]);
  	}
  	return res;
}
function reverseArrayInPlace(array){
	var temp;
	for(var i = 0; i < array.length / 2; i++){
		temp = array[i];
		array[i] = array[array.length-i-1];
		array[array.length-i-1] = temp;
	}
	return array;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);