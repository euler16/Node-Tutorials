const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.js');

let app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT,function(){
    console.log(`Express at your service at ${PORT}`);
    db.connect();
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',express.static('public'));


app.get('/get',function(req,res) {
    db.show(function(data){
        console.log(data);
        return res.send(data); // sending array of objects
    });
});

app.post('/add',function(req,res) {
    let name = req.body.name;
    let price = req.body.price;
    db.add(name,price,function(id) {
        return res.send({id:id}); // sends back the id created    
    });
});

app.post('/delete',function(req,res){
    let id = req.body.id;
    console.log(id);
    db.del(id,function(numDel) {
        return res.send({numDel:numDel});
    });
});

