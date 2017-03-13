const express           = require('express');
const router            = express.Router();
const controllerArticle = require('../controllers/controllerArticle')


/* GET users listing. */
router.get('/api/article', controllerArticle.getArticle); 

router.post('/api/article', controllerArticle.createArticle);

module.exports = router;
