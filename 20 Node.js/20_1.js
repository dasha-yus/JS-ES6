const {statSync, readdirSync, readFileSync} = require("fs");

let searchTerm = new RegExp(process.argv[2]);

for (let arg of process.argv.slice(3)) {
  search(arg);
}

function search(file) {
  if (statSync(file).isDirectory()) {
    for (let f of readdirSync(file)) {
      search(file + "/" + f);
    }
  } else if (searchTerm.test(readFileSync(file, "utf8"))) {
    console.log(file);
  }
}

// const testFolder = './search';
// const fs = require('fs');

// fs.readdirSync(testFolder).forEach(file => {
//   if (searchTerm.test(file.toLowerCase())) console.log(file);
// })