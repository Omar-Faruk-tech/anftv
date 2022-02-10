var express = require('express');
var router = express.Router();
const newsControllers = require('../controllers/news');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// get landing page data
router.get('/landing', newsControllers.newsControllers.getLanding);


module.exports = router;
