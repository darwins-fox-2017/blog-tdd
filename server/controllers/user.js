const express = require('express');
const router = express.Router()
const User = require('../models/user')
const hash = require('password-hash');
const jwt = require('jsonwebtoken')

let methods = {}

methods.register = function (req,res,next) {

  let newUser = new User({
    username : req.body.username,
    password : hash.generate(req.body.password)
  })

  newUser.save(function (err,user){
    if(err){
      res.send(err.errmsg)
    }else{
      res.send({msg : 'successfully added', username : user.username})
    }
  })

}

methods.login = function (req,res,next) {
  User.findOne({username : req.body.username}, function (err,user) {
    if (err) {
      res.send({msg : 'occurred'})
    }else if (!user){
      res.send({msg : 'username not found'})
    }else{
      if (hash.verify(`${req.body.password}`, user.password)) {
        let token = jwt.sign({ username: user.username }, 'kukukakikakakkukakukaku', { expiresIn: '1d' });
        res.send({ token: token })
      }else{
        res.send({msg : 'Password is invalid'})
      }
    }
  })
}

module.exports = methods
