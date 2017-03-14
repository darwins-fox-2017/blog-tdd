const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection

const article = require('./routes/articles');
const user = require('./routes/users');
// const index = require('./routes');

mongoose.connect('mongodb://localhost:27017/blog');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));


app.use('/api', article)
app.use('/api', user)
// app.use('/api', index)

app.listen(3000)

module.exports = app
