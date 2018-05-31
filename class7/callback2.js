
const MAXTIME = 7;
//var time = 0;

function asyncCaller(funcA, funcB, maxTime) {
	//var time = 0;
	var t1 = setInterval(function() { funcA(maxTime);}, 1000);
	//var t2 = setTimeout(funcB, 2000);

	// sync code
	console.log("Sync Code");
}

function callerFunc() {
	var time = 0;
	console.log("begining callerFunc");
	asyncCaller(function (maxTime) {
					console.log("funcA");
					/*time += 1;
					//console.log(t1);
					console.log(time);
					console.log(maxTime);
					if (time >= maxTime){
						clearInterval(t1)
					}*/
				},
				function () {
					console.log("funcB");
				}, MAXTIME);
}

callerFunc();