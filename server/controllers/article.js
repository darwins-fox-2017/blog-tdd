const express = require('express');
const router = express.Router()
const Article = require('../models/article')
let methods = {}

methods.getAllData = function(req,res,next) {
  Article.find({},function (err,result) {
    if(err) res.status(500).send(err)
    res.send(result)
  })
}

methods.getOneData = function(req,res,next) {
  Article.findOne({slug : req.params.slug},function (err,result) {
    if(err) res.status(500).send(err)
    res.send(result)
  })
}

methods.update = function (req,res,next) {
  Article.findOne({slug: req.params.slug}, function (err, data) {
    if (err) {
      res.status(500).send(err)
    }else{
      data.title = req.body.title || data.title
      data.content = req.body.content || data.content
      data.catagory = req.body.catagory || data.catagory
      data.slug = req.body.slug || data.slug

      data.save(function (err) {
        if (err) {
          res.send(err)
        }else{
          res.send({msg : 'data has been successfully updated'})
        }
      })
    }
  })
}

methods.create = function (req,res,next) {
  let newArticle = new Article(req.body)

  newArticle.save(function (err,article) {
    if (err) {
      res.send(err)
    }else{
      res.send({msg : 'successfully added', data : article})
    }
  })
}

methods.delete = function (req,res,next) {
  Article.findOneAndRemove({slug: req.params.slug},function (err,article) {
    if (err) {
      res.send(err)
    }else{
      res.send({msg : 'data has been successfully removed from database', data : article })
    }
  })
}

module.exports = methods
