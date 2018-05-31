const express = require('express');
const app  = express();
const db  = require('./route/db.js')
const path = require('path');
const PORT = process.env.PORT || 5000;



const routes = {
    user: require('./route/route'),
    admin: require('./route/admin.js'),
    template:require('./route/template-route')
};
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'view'));

app.use('/shopping',routes.user);
app.use('/admin',routes.admin);

app.use('/template',routes.template)
app.listen(PORT,function() {
    console.log(`server at ${PORT}`);
    db.connect();
})