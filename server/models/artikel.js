`use strict`
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var artikelSchema = new Schema({
  title: {type: String, unique: true},
  content: String,
  category: String,
  slug: String
},
  {
    timestamp: true
  })

var Artikel = mongoose.model('Artikel', artikelSchema)

module.exports = Artikel
