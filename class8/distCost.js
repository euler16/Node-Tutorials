/*CAR PROBLEM*/
var distCost = {};
(function (global) {
		function distPrice(dist) {
			return = dist* ((dist>15)?100:((dist>5)?40:20));
		}

		global.calcCost = distPrice;
})(distCost);