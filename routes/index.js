var express = require('express');
var router = express.Router();
var posts = require('../public/javascripts/data.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { posts: posts });
});

module.exports = router;