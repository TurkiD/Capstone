var express = require('express');
var router = express.Router();


/* GET New Post. */
router.get('/', function (req, res, next) {
  res.render('posts/newPost');

});

router.post('/submit', function (req, res, next) {
  let post = req.body;
  console.log(post);
});

module.exports = router;