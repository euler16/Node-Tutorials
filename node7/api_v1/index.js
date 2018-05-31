const router = require('express').Router();

let route = {
    api: require('./userdata')
}

router.use('/index',route.api.router);

module.exports = {
    router
};