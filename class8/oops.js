/*to expose functions to global space*/
// a good programming jargaon is to create a file specific global variable
var global = {};
(function () {
	'use strict';

	function public1() {
		console.log("Publically Available in function1 ");
	}

	function public2() {
		console.log("Publically Available in function2 ");
	}
	function private1() {
		console.log("Privately Available in function1 ");
	}
	function private2() {
		console.log("Privately Available in function2 ");
	}

	var exposed = {
		"public1": public1,
		"public2": public2
	}
	window.exposed = exposed;
	global.exposed = exposed; /* or global['exposed'] = exposed; */
})();

console.log(exposed); /*window.exposed*/
exposed.public1();		/* windows.exposed is global*/
console.log(global.exposed.public2());

/*console.log(private1())  returns an error as */