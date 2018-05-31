var y = require('./lib2.js'); // also runs lib2.js
/*lib2.js has this.a and this.b ..... the result of require is 'this' */
/*if we use module.exports {} in lib2 we get the values d,e*/
console.log(y);
console.log(y.h());