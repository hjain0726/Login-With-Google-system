const User = require('./schemas/userschema');

const useroperations = {
    finduser(username) {
        User.find({ username: username }, (err, docs) => {
            if (err) {
                console.log(err);
            }
            else {
                if (docs && docs.length > 0) {
                    console.log('no need to add already in db');
                }
                else {
                    var newuser = new User({ username: username });
                    newuser.save((err) => {
                        console.log(err);
                    });
                }
            }
        });
    }
};

module.exports = useroperations;