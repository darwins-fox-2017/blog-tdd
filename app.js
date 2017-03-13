var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan')

var users = require('./routes/users');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog')

var app = express();

app.use(morgan())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', users);

app.listen(3000)
