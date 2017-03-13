'use strict'
var Article = require('../models/article.js');
var slug    = require('slug')

module.exports = {
  getArticle : (req, res, next) => {
    Article.find({}, (err, articles) => {
      if (err) {
        res.send(err)
      } else {
        res.status(200).json(articles);
      }
    })
  },

  createArticle : (req, res, next) => {
    var newArticle = Article(
      {
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        slug: slug(req.body.title).toLowerCase()
      })

    newArticle.save((err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  },

  updateArticle : (req, res, next) => {
    Article.findOneAndUpdate(
      {
        slug: req.params.slug
      }, req.body, {new: true}, (err, articles) => {
        if (err) {
          res.send(err)
        } else {
          res.send(articles);
        }
      })
  },

  deleteArticle : (req, res, next) => {
    Article.findOneAndRemove(
      {
        slug: req.params.slug
      }, (err, data) => {
        if (err) {
          res.send(err)
        } else {
          res.send(data);
        }
      })
  },

  getOneArticle : (req, res, next) => {
    Article.find({
      slug: req.params.slug
    }, (err, article) => {
      if (err) {
        res.send(err)
      } else {
        res.status(200).json(article);
      }
    })
  }
}
