// Everything
function every(array, test) {
  for(var i of array){
  	if(!test(i)) return false;
  }
  return true;
}

function every1(array, test) {
  return !array.some(val => !test(val));
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
console.log();
console.log(every1([1, 3, 5], n => n < 10));
console.log(every1([2, 4, 16], n => n < 10));
console.log(every1([], n => n < 10));