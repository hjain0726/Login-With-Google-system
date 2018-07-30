const dbconfig = require('./config');
const mongoose = require('mongoose');

mongoose.connect(dbconfig.dbpath);

module.exports = mongoose;