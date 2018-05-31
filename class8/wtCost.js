var wtCost = {};
(function (global) {
		function wtPrice(wt) {
			return = wt*(wt>30)?25:((wt>15)?15:0);
		}

		global.calcCost = wtPrice;
})(wtCost)