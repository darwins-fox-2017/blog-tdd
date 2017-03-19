var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var passportLocalMongoose = require('passport-local-mongoose');
var connection = mongoose.createConnection("mongodb://localhost/blog-tdd");
autoIncrement.initialize(connection);

// MEMBUAT SCHEMA
var userSchema = mongoose.Schema({
    userId: Number,
    password: String,
    username: String
});

userSchema.plugin(autoIncrement.plugin, {
    model: 'userSchema',
    field: 'userId'
});

userSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', userSchema)
module.exports = User
