// console.log(arguments);
// console.log(require('module').wrapper);

const C = require('./test-module-1');

const calc1 = new C();
console.log(calc1.add(2, 3));

const { add, multiply, divide } = require('./test-module-2');
console.log(add(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

// caching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();
