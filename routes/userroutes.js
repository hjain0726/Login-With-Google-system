const express = require('express');
const passport = require('passport');
const useroperations = require('../db/usersoperations');
const userroute = express.Router();

userroute.get('/', (req, res) => {
    res.render('home');
});

userroute.get('/login', passport.authenticate('google', {
    scope: ['profile']
}));

userroute.get('/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
    var username = req.user.profile.displayName;
    req.session.username = username
    //console.log("session is:",req.session);
    res.render("dashboard", { usrname: username });
});
userroute.get('/logout', (req, res) => {
    res.redirect('/');
    req.session = {};
    //console.log("after logout session is:",req.session);
});

module.exports = userroute;