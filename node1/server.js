const express = require('express');
const app = express();

var port = process.env.PORT || '5000';

// middleware ... to execute something that executes everytime
app.use('/',express.static('public_static')); // requires index.html


//first parameter is the path
/*app.get('/',function(req, res){
	res.send('Hello World');
	console.log(req);
	console.log(res);
})*/

app.get('/student',function(req,res){
	return res.send('Student is here');
})

// the first parameter to a function in Nodejs tradition is error and then callback
app.listen('5000',function() {
	//5000 is port
	console.log('server on ${{ port }}');
})

