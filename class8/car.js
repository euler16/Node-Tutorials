window.onload = function() {
	var dist = document.getElementById('distance');
	var wtTime = document.getElementById('wt');
	var btn = document.getElementById('result');
	var result = document.getElementById('output');

	btn.onclick = function() {
		var distVal = parseFloat(dist.value);
		var wtVal = parseFloat(wtTime.value);

		result.innerHTML = distCost.calcCost(distVal) + wtCost.calcCost(wtVal);
	}
}