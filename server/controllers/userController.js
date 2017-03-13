var User = require('../models/user')
var hash = require('passwrod-hash')

module.exports = {
  register: function(req, res) {
    User.create({
      username: req.body.username,
      password: hash.generate(req.body.password),
    }, function (err, data) {
      if (err) {
        res.send(err)
      }else{
        res.send(data)
      }
    })
  },
  login: function(req, res) {
    User.find({username:req.body.username}, function(data){
      if (err){
        res.send(err)
      }else{
        if(hash.verify(req.body.password, data.password)){
          res.send(data)
        }else{
          res.send('check your authentication')
        }
      }
    })
  },
  deleteUser: function(req,res) {
    User.findOneAndRemove({slug:req.params.slug}, function(err, data){
      if (err){
        res.send(err)
      }else{
        res.send(data)
      }
    })
  }
}
