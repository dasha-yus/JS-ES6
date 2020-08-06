import {parseExpression, skipSpace, parseApply, parse, specialForms,
    evaluate, topScope, run} from "./module.js";

specialForms.set = (args, env) => {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Bad use of set");
  }
  var name = args[0].name;
  var value = evaluate(args[1], env);

  for (let scope = env; scope; scope = Object.getPrototypeOf(scope)) {
    if (Object.prototype.hasOwnProperty.call(scope, name)) {
      scope[name] = value;
      return value;
    }
  }
  throw new ReferenceError(`Setting undefined variable ${name}`);
};

run(`
do(define(x, 4),
   define(setx, fun(val, set(x, val))),
   setx(50),
   print(x))
`);
// → 50
run(`set(quux, true)`);
// → Some kind of ReferenceError