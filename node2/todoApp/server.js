const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 4000;

const fname = path.join(__dirname,'tasks.txt');

var todoStack = fs.readFileSync(fname).toString().split(',') || [];

app.listen(port, ()=> {
	console.log(`Express at your service at ${port}`);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/',express.static('public'));

app.post('/add_task',function(req,res) {
	let task = req.body;
	todoStack.push(task.name);

	fs.writeFile(fname,todoStack,(err)=> {
		if (err) console.log(err);
		console.log("Successfully written");
		fs.readFile(fname,'utf-8',function(err,data) {
			if(err)
				return console.log(err);

			console.log('successfully read');
			res.send(data);
		});
	});
	//console.log(task);
});