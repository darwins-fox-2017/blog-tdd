let db = require('../models')

let slug = require('slug')

module.exports = {
  index: function(req, res, next){
    db.Post.findAll().then(function(posts){
      res.json(posts)
    })
  },
  create: function(req, res, next){
    let published = req.body.published == 'true'
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      slug: slug(req.body.title, {lower: true}),
      published: published
    }).then(() => {
      res.json({
        status: true,
        msg: 'Post saved'
      })
    })
  },
  show: function(req, res, next){
    db.Post.findById(req.params.id).then((post) => {
      res.json(post)
    })
  }
}
