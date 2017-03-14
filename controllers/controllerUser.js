var passport      = require('passport');
var User          = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;


module.exports = {
  register : (req, res, next) => {
    User.register({
      username: req.body.username,
      email: req.body.email
    }, req.body.password, (err, user) => {
      if (err) {
        res.send(err)
      } else {
        // passport.authenticate('local')(req, res, () => {
        res.json(user);
        // })
      }
    })
  },

  signin : (req, res, next) => {
    passport.authenticate('local', (err, user) => {
      res.json(user)
    })(req, res, next )
  },

  getUsers : (req, res, next) => {
    User.find({}, (err, users) => {
      if (err) {
        res.send(err)
      } else {
        res.json(users);
      }
    })
  },

  getOneUser : (req, res, next) => {
    User.findOne({
      username: req.params.username
    }, (err, user) => {
      if (err) {
        res.send(err)
      } else {
        res.json(user);
      }
    })
  },

  updateUser : (req, res, next) => {
    User.findOneAndUpdate({
      username: req.params.username
    }, req.body, {new: true}, (err, user) => {
      if (err) {
        res.send(err)
      } else {
        res.json(user)
      }
    })
  },

  deleteUser : (req, res, next) => {
    User.findOneAndRemove({
      username: req.params.username
    }, (err, user) => {
      if (err) {
        res.send(err)
      } else {
        res.json(user)
      }
    })
  }

}
