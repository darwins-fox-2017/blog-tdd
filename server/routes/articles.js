const express = require('express');
const Article = require('../controllers/article');
const router = express.Router()

router.get('/articles', Article.getAllData)
router.get('/articles/:slug', Article.getOneData)
router.put('/articles/:slug', Article.update)
router.post('/articles', Article.create)
router.delete('/articles/:slug', Article.delete)
module.exports = router
