let Post = require('../models/post')

module.exports = {
  index: function(req, res, next){
    Post.find({}, function(err, posts){
      if (err) {
        res.json(err)
      } else {
        res.json(posts)
      }
    })
  },
  createL function(req, res, next){
    let post = new Post({
      title: req.body.title,
      body: req.body.body,
      slug: null,
      status: req.body.status
    })

    post.save(function(err){
      if (err) {
        res.json(err)
      } else {
        res.json({msg: 'Post saved'})
      }
    })
  }
}
