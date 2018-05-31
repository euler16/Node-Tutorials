const express = require('express');
const app = express();
const PORT = process.env.PORT||5000;
const db = require('./db');

const bodyParser = require('body-parser');
const api = require('./api_v1');
// const db = require('./db');
app.use('/',bodyParser.urlencoded({extended:true}));
app.use('/',bodyParser.json());
app.use('/api_v1',api.router)

app.listen(PORT,function() {
    console.log(`Express at your service ${PORT}`);
    db.model.connectionStart();    
})