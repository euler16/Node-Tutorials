$(document).ready(function() {
    
        var inputBox = $('#add-box');
        var btnAdd   = $('#add-btn');
        var todoUL   = $('#todo-list');
    
        $('button').on('click',function() {
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
                url:'/add',
                method:'POST',
                dataType: 'json',
                data:task,
                success: function(d,status) {
                    todoUL.append('<li class="todo" id="' + d + '">' + taskName + '<button>Edit</button>' + '</li>');
                    console.log(d);
                    inputBox.val('');
                }
            });
        });
        $('li').on('dblclick',function(){
            var task = {name:$(this).text(),id: $(this).attr('id')};
            console.log(task);
            $.ajax({
                url: '/delete',
                method: 'POST',
                dataType: 'json',
                data: task,
                success: function(d,status) {
                    $(this).remove();
                } 
            });
        })
    })