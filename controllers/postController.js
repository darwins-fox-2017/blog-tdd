let db = require('../models')

let slug = require('slug')

module.exports = {
  index: function(req, res, next){
    db.Post.findAll().then(function(posts){
      res.json(posts)
    })
  },
  create: function(req, res, next){
    console.log(req.body);
    let published = req.body.published == 'true'
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      slug: slug(req.body.title),
      published: published
    }).then(() => {
      res.json({msg: 'Post saved'})
    })


  }
}
