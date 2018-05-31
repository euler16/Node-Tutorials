const express = require('express');
const router = express.Router();
const db = require('../db');
const bodyParser = require('body-parser');


router.post('/add',function(req,res) {
    /* let userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    } */
    let userData = req.body;
    console.log(req.body);
    db.actions.userData.fillTable(userData,function(err,data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data);
            res.send(data);
        }
    })    
});

router.post('/delete',function(req,res) {
    let id = req.body.id;
    db.actions.userData.destroy(id,function(err,data){
        if(err) {
            console.log(err);
        }
        else {
            console.log(data);
            res.send(`Successfully deleted id: ${id}`);
        }
    })
})

module.exports = {
    router
}