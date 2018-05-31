$(document).ready(function() {

	var inputBox = $('#add-box');
	var btnAdd   = $('#add-btn');
	var todoUL   = $('#todo-list');

	$('button').click(function() {
		var taskName = inputBox.val();
		//console.log(taskName);
		if (taskName === '') {
			console.log(taskName);
			return;
		}

		var task = {
			name: taskName,
			done: false
		};
		console.log(task)
		$.ajax({
			url:'/add_task',
			method:'POST',
			data:task,
			success: function(d,status) {
				todoUL.append('<li>' + taskName + '</li>');
				console.log(d);
				inputBox.val('');
			}
		});
	});
})