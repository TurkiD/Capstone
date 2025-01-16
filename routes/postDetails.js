var express = require('express');
var router = express.Router();
var posts = require('../public/javascripts/placeholder-data');

/* GET Post page. */
router.get('/:id', function (req, res, next) {
    let postId = parseInt(req.params.id);
    let post = posts.find(p => p.id === postId);
    if (post) {
        res.render('posts/postDetails', { post: post });
    } else {
        res.render('error', { message: 'Post not found', error: { status: 404 } });
    }
});

module.exports = router;