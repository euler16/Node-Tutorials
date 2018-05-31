const router = require('express').Router();
let db = require('./db.js');

router.get('/:id',function(req,res) {
    let id = req.params.id;
    db.showid(id,function(result) {
        let name = result[0].name;
        res.send(name);
    });
});
router.get('/price/:id',function(req,res) {
    let id = req.params.id;
    db.showid(id,function(result) {
        let price = result[0].price;
        res.send(`${price}`);
    });
})
/* router.post('/bye',function(req,res) {
    res.send('Bye');
}); */

module.exports = router;