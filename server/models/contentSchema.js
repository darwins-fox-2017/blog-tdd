var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/blog-tdd");
autoIncrement.initialize(connection);

// MEMBUAT SCHEMA
var contentSchema = mongoose.Schema({
    contentId: Number,
    slug: String,
    title: String,
    artikel: String
});

contentSchema.plugin(autoIncrement.plugin, {
    model: 'contentSchema',
    field: 'contentId'
});

var Content = mongoose.model('Content', contentSchema)
module.exports = Content
