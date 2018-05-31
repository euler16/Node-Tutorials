console.log("Called from above the defination");

greet(); /* functions getting hoisted */
// greet2("How are u"); /* not hoisted */
function greet() {
	console.log("Hello World");
}

console.log("Called from below defination");
greet();

var greet2 = function (message) {
	console.log("Hello World!" + message);
}