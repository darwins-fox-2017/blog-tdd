const mongoose = require('mongoose');
const Schema = mongoose.Schema


const articleSchema = new Schema({
  title : String,
  content : String,
  catagory : String,
  slug : String
})

const article = mongoose.model('articles', articleSchema)

module.exports = article
