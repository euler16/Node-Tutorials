const router = require('express').Router();

router.get('/',function(req,res) {
    res.render('index',{"greet":"hello",key:[
        {name:"bat",price: 1000},{name:"game",price:100}
    ]});
});

module.exports = router;