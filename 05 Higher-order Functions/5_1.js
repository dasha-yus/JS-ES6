// Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((res, cur) => res.concat(cur), []));