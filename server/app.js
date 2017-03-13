const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection
const article = require('./routes/articles');

mongoose.connect('mongodb://localhost:27017/blog');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));


app.use('/api', article)
app.listen(3000)

module.exports = app
