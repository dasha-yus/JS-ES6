// Your own loop
function loop(val, testFunc, updateFunc, bodyFunc){
  for(var i = val; testFunc(i); i = updateFunc(i)){
	bodyFunc(i);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);