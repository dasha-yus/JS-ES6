// The sum of a range
function range(start, end, step){
	var array = [];
	if(!step){
		step = start < end ? 1 : -1;
	}
	if (step > 0) {
    	for(var i = start; i <= end; i += step){
    		array.push(i);
    	}
  	} else {
    	for(var i = start; i >= end; i += step){
    		array.push(i);
    	}
    }
	return array;
}
function sum(array){
	var sum = 0;
	for(var i = 0; i <= array.length; i++){
		sum += i;
	}
	return sum;
}
console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(range(1, 10, 2));
console.log(sum(range(1, 10)));