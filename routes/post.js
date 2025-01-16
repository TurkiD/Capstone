var express = require('express');
var router = express.Router();
var posts = require('../public/javascripts/placeholder-data');

/* GET New Post. */
router.get('/newPost', function (req, res, next) {
  res.render('posts/newPost');

});

router.post('/submit', function (req, res, next) {
  let { title, body, category} = req.body;
  if (!title || !body || !category) {
    res.render('posts/newPost', { error: 'All fields are required' });
    return;
  }
  let newPost = {
    id: posts.length + 1,
    title: title,
    body: body,
    category: category,
    date: new Date().toLocaleDateString('en-GB').replace(/\//g, ' '),
    published: true,
  };
  posts.push(newPost);

  res.redirect('/articles');
});

module.exports = router;