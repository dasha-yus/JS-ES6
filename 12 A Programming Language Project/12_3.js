import {parseExpression, parseApply, parse, specialForms,
		evaluate, topScope, run} from "./module.js";

function skipSpace(string) {
  var regex = /^(\s|#.*)*/;
  var match = regex.exec(string);
  return string.slice(match[0].length);
}

console.log(parse("# hello\nx"));
// → {type: "word", name: "x"}

console.log(parse("a # one\n   # two\n()"));
// → {type: "apply",
//    operator: {type: "word", name: "a"},
//    args: []}