var jobInput = document.querySelector('#new-task');
var plusBtn  = document.querySelector('#add-btn');
var todoList = document.querySelector('#todo-ul');
var compList = document.querySelector('#com-ul');


$("#add-btn").click(function(){
    $.ajax({url: "/", success: function(result){
        $('body').html(result);
    }});
});




function createJob(jobString,n) {
	
	var jobItem = document.createElement('li');
	
	//job string
	var ckbElement = document.createElement('input');
	ckbElement.type = 'checkbox';
	ckbElement.id = 'task' + n.toString();

	var jobTextLabel = document.createElement('label');
	jobTextLabel.htmlFor = 'task' + n.toString();
	jobTextLabel.innerHTML = jobString;
	//edit
	var spanEditElement = document.createElement('span');
	spanEditElement.className = "right-aligned edit";
	spanEditElement.innerHTML = '<a href="" class="edit"><i class="material-icons">edit</i></a>';

	//var aEditElement = document.createElement('a');
	//var iconEditElement = document.createElement('i');

	//delete
	var spanDelElement = document.createElement('span');
	spanEditElement.className = "right-aligned delete";
	spanEditElement.innerHTML = '<a href="" class="del"><i class="material-icons">clear</i></a>';

	//var aDelElement = document.createElement('a');
	//var iconDelElement = document.createElement('i');
	ckbElement.appendChild(jobTextLabel);
	jobItem.appendChild(ckbElement);
	jobItem.appendChild(spanEditElement);
	jobItem.appendChild(spanDelElement);

	return jobItem;
}

function addJob()

