const express           = require('express');
const router            = express.Router();
const controllerArticle = require('../controllers/controllerArticle')


/* GET users listing. */
router.get('/api/article', controllerArticle.getArticle);

router.post('/api/article', controllerArticle.createArticle);

router.put('/api/article', controllerArticle.updateArticle);

module.exports = router;
