// Chessboard
const size = 8;
var res = "";
for(var i = 1; i <= size; i++){
	for(var j = 1; j <= size; j++){
		if((i + j) % 2 === 0){
			res += " ";
		} else {
			res += "#";
		}
	}
	res += "\n";
}
console.log(res);