var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index', { title: 'Express' });
});

router.get('/login', controller.login)

module.exports = router;
