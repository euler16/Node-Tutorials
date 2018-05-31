const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 4000;

const fname = path.join(__dirname,'tasks.txt');
var todoStack = []// fs.readFileSync(fname).toString().split(',') || [];

app.listen(port, ()=> {
	console.log(`Express at your service at ${port}`);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/',express.static('public'));

app.post('/add',function(req,res) {
    console.log(req)
    let task = req.body;
    console.log(task);
    task.id  = todoStack.length;
	todoStack.push(task);

	fs.writeFile(fname,todoStack,(err)=> {
        if (err) {
            console.log(err);
            res.send(-10);
        }
        console.log("Successfully written");
		/* fs.readFile(fname,'utf-8',function(err,data) {
			if(err)
				return console.log(err);

			console.log('successfully read');
			res.send(data);
        }); */
        res.send(todoStack);
    });
    
});

app.post('/update',function(req,res){
    let task = req.body;
    for(let i=0; i<todoStack.length; ++i) {
        if (todoStack[i].id === task.id) {
            todoStack[i].name = task.name;
        }
    }
    fs.writeFile(fname,todoStack,(err)=> {
        if (err) {
            console.log(err);
            res.send(-10);
        }
        console.log("Successfully written");
        // res.send('success');
		/* fs.readFile(fname,'utf-8',function(err,data) {
			if(err)
				return console.log(err);

			console.log('successfully read');
			res.send(data);
        }); */
        res.send(todoStack);
    });

});

app.post('/delete',function(req,res){
    let task = req.body;
    


    
    todoStack = newTodoStack;
    fs.writeFile(fname,todoStack,(err)=> {
        if (err) {
            console.log(err);
            res.send(-10);
        }
        console.log("Successfully written");
        res.send(todoStack);
    }); 
});
app.get('/',function(req,res){
    return res.send(todoStack);
});