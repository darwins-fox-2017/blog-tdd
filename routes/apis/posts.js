var express = require('express');
var router = express.Router();

var postController = require('../../controllers/postController')

/* GET users listing. */
router.get('/', postController.index);

router.post('/', postController.create)

module.exports = router;
