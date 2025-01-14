var express = require('express');
var router = express.Router();

/* GET New Post. */
router.get('/', function (req, res, next) {
  res.render('posts/newPost');

});

module.exports = router;