// IIFE :- Immediately Invoke Function Expression

(function() {
	"use strict";
	var onload;
	function main() {
		var y = 3;
		console.log("I am here");
		function hello() {
			console.log("Hello");
		}
		onload = hello;
	}
	main();
	onload();
})();