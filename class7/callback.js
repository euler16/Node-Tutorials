//function printNumbers(max, next) {
//	for (var i = 0; i < max; i++) {
		/* sync loop .. can't be skipped */
//		console.log(i);
//	}

//	next();
//}

//function printHello() {
//	console.log("Print Hello");
//}

//printNumbers(10, printHello); /* call back */

function clockTime(next) {
	setTimeout(function(){
		/* this anonymous function is like a network request*/
		var data = 0;
		console.log("Hello");
		next(data);
	}, 10000);
	/* we will get async output before hello */
	/* advantage of setTimeout() being async */
	console.log("call me if something is async");

}
// clockTime();

function Main(x,y) {
	console.log("Getting Started");
	var z = x + y;
	clockTime(function (data) {
		console.log("Z is ready now");
		console.log(z);
		console.log(data);
	})
}

Main(10,10);