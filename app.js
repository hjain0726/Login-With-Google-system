const express = require('express');
const ejs = require('ejs');
const session = require('express-session');
const passport = require('passport');
const passportGoogle = require("./utils/passportgoogle");
const userroute = require('./routes/userroutes');

const app = express();
app.use(passport.initialize());
app.use(session({
    secret: 'Its My Life',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 10 * 60 * 1000 }
}));
app.set('view engine', 'ejs');
app.use('/', userroute);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started");
});