var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog-tdd');
var slug = require('slug')
let jwt = require('jsonwebtoken');

let Content = require("../models/contentSchema.js");
let User = require("../models/userSchema.js");

var passport = require('passport');


router.post('/register', function (req, res) {
    User.register(new User({
        username: req.body.username
    }), req.body.password, function (err) {
        if (err) {
            console.log('error while user register!', err);
            return next(err);
        }
        console.log('user registered!');
        res.redirect('/');
    });
});

router.post('/login', passport.authenticate('local'), function (req, res) {
    var token = jwt.sign('user', 'secret')
    res.json(token)
});



router.get('/', function (req, res) {
    Content.find({}, function (err, result) {
        if (err) res.status(500)
            .send(err);
        res.send(result)
    })
});

router.post('/', function (req, res) {
    let content1 = new Content({
        title: req.body.title,
        slug: slug(req.body.title),
        artikel: req.body.artikel
    });

    content1.save(function (err, respond) {
        if (err) return console.error(err);
        res.send(content1)
    });
});

router.put('/', function (req, res) {
    Content.findOneAndUpdate({
        slug: req.body.slug
    }, {
        $set: {
            title: req.body.title,
            artikel: req.body.artikel
        }
    }, {
        new: true
    }, function (err, tank) {
        if (err) return res.send(err.message);
        res.send(tank);
    });
});

router.delete('/', function (req, res) {
    Content.findOneAndRemove({
        slug: req.body.slug
    }, function (err, Content) {
        var response = {
            message: `Content with contentId ${req.body.contentId} successfully deleted`
        };
        res.send(response);
    });
});



module.exports = router;
