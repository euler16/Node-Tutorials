const file = require('fs'); // file stream package available to node
const path = require('path');


console.log(__dirname);
console.log(path.join(__dirname,'../lib2.js'));

file.readFile('file1.txt',function(err,data) {
	if (err) throw err;
	console.log(data.toString()); // without toString it returns buffer ascii values 
});

file.readFile('file1.txt','utf-8',function(err,data) {
	if (err) {
	 	return 'No file';
	}	
	console.log(data); // no need of toString()
});

file.writeFile('main.txt',"Hello World",(err)=>{
	console.log('File written');
});

file.writeFile('main.txt',"Hello World",(err)=>{
	console.log('File written');
});