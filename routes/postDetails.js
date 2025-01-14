var express = require('express');
var router = express.Router();

/* GET Post page. */
router.get('/:postTitle', function (req, res, next) {
    let post = req.params;
    res.render("posts/postDetails", {post: post});
});

module.exports = router;