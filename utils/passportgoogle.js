const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth20");
const useroperations = require('../db/usersoperations');

passport.use(new GoogleStrategy({
    clientID: '97455115356-e7hg23a174rvtbiom8p5nv2pg90ra6d4.apps.googleusercontent.com',
    clientSecret: '0jp8BO1b8z7Ye7u9XnI9PWWg',
    callbackURL: '/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    console.log("Passport Google Call Back Function.... AccessToken " + accessToken + " Ref " + refreshToken + " Profile ", profile, "Done ", done);
    console.log("Call to DB  to store data");
    const username = profile.displayName;
    useroperations.finduser(username);
    return done(null, { token: accessToken, profile: profile }); // null represent no error
}));
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((user, done) => {
    done(null, { profile: profile, t })
});
