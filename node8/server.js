const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

//const userconfig = require('./userconfig.json');

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const PORT = process.env.PORT || 5000;
const saltRounds = 10;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({secret: 'bakchodi'}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/',express.static('public_static'));

const fs = require('fs');

passport.use(new localStrategy(
    function (username,password,done) {
        console.log(path.join(__dirname, './userconfig.json'));
        let data = JSON.parse(fs.readFileSync('userconfig.json','utf8'));
        
        if (username !== data.username) {
            return done(null,false,{message: "username not found"});
        }
        else {
            bcrypt.compare(password, data.password, function (err, result) {
                if (!result)
                    return done(null, false, { message: "password is incorrect" });
                else
                    return done(null,data);
             });
        }
    }
));

passport.serializeUser(function(user,done) {
    done(null,user);
});

passport.deserializeUser(function(id,done) {
    done(null,id);
})

app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/success',
        failureRedirect: '/fail'
    })
);

app.post('/signup',function(req,res) {
    let username = req.body.username;
    let password = req.body.password;
    bcrypt.hash(password,saltRounds,function(err,hash) {
        fs.writeFile('userconfig.json', `{
            "username":"${username}",
            "password":"${hash}"
        }`,function(err) {
            if(err)
                console.log(err);
            else {
                console.log('written to db');
                res.send(200);
            }
        });
    });
})
app.get('/fail',function(req,res) {
    res.send("login failed");
});

app.get('/success',function(req,res) {
    res.send(req.user);
})

app.listen(PORT,function() {
    console.log(`EXPRESS at ${PORT}`);
})