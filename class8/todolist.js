var taskArray = JSON.parse(localStorage.getItem('data')) || [];

window.onload = function() {

	var taskValue = document.getElementById('task');	
	var btn  = document.getElementById('add');
	var list = document.getElementById('list');

	display();
	btn.onclick = function() {
		var task = {
			"taskValue": taskValue.value,
			"done": false
		};

		taskArray.push(task);
		localStorage.setItem('data', JSON.stringify(taskArray));
		display();
	}

	function display() {
		var data = "";
		for (let i = 0; i < taskArray.length; i++) {
			if (taskArray[i].done === true)
				data += '<li id=' + i + ' style="text-decoration:line-through;"' + ' onclick="check(this)">' + taskArray[i].taskValue + '</li>';
			else	
				data += '<li id=' + i + ' onclick="check(this)">' + taskArray[i].taskValue + '</li>';
			/*note we r not using "i"*/
			/*onclick searches check in window scope so check() is in window*/
			/* this gives the whole tag*/

			console.log(taskArray[i]);
		} 

		list.innerHTML = data;
	}

	

}
function check(el) {
	console.log(el.id);
	if (taskArray[el.id].done)	
		el.style.textDecoration = '';

	else
		el.style.textDecoration = 'line-through';
	
	taskArray[el.id].done = !taskArray[el.id].done;
	localStorage.setItem('data', JSON.stringify(taskArray));
}