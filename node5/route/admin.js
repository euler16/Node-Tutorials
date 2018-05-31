const router = require('express').Router();
let db = require('./db.js');

router.get(`/add`,function(req,res) {
    // url: http://localhost:5000/admin/add?name=game&price=300
    db.add(req.query.name,+req.query.price,function(id) {
        console.log('ADD SUCCESS');
        res.send(`${id}`);
    });
})
module.exports = router;