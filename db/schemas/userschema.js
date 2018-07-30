const mongoose = require('../common/connection');

var Schema = mongoose.Schema;
var userschema = new Schema({ username: String });
var User = mongoose.model('users', userschema);

module.exports = User;