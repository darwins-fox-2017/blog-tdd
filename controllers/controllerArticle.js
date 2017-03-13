'use strict'
var Article = require('../models/article.js');
var slug    = require('slug')

module.exports = {
  createArticle : (req, res, next) => {
    var newArticle = Article(
      {
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        slug: slug(req.body.title)
      })

    newArticle.save((err) => {
      if (err) {
        res.send(err)
      } else {
        res.send(`${req.body.title} has been created`)
      }
    })
  },

  getArticle : (req, res, next) => {
    Article.find({}, (err, articles) => {
      if (err) {
        res.send(err)
      } else {
        res.status(200).json(articles);
      }
    })
  }
}
