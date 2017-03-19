var mongoose = require('mongoose');
var express = require('express')
mongoose.connect('mongodb://localhost/blog-tdd');
var slug = require('slug')
let Content = require("./models/contentSchema.js");

// function insertContent() {
//     let content1 = new Content({
//         slug: slug("seorang irwin pergi berbelanja di pasar"),
//         title: "seorang irwin pergi berbelanja di pasar",
//         artikel: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//     });
//
//     let content2 = new Content({
//         slug: slug("meninggal karena wanita jadi - jadian"),
//         title: "meninggal karena wanita jadi - jadian",
//         artikel: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//     });
//
//     content1.save(function (err, res) {
//         if (err) return console.error(err);
//         console.log(`content 1 berhasil dimasukkan`);
//     });
//
//     content2.save(function (err, res) {
//         if (err) return console.error(err);
//         console.log(`content 2 sberhasil dimasukkan`);
//     });
// }

// insertContent()
var passport = require('passport');
var Strategy = require('passport-local')
    .Strategy;
    passport.use(new LocalStrategy(User.authenticate()));
let User = require("./models/userSchema.js");

User.register({
    email: "endy@gmail.com",
    userName: "kucing"
}, "ini password", function (err, user) {
    if (err) {
        console.log(err);
    } else {
        console.log(user);
    }
})
