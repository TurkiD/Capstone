var express = require('express');
var router = express.Router();
var posts = require('../public/javascripts/placeholder-data');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('articles', { posts: posts });
});

module.exports = router;