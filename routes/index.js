var express = require('express');
var router = express.Router();

const posts = [
  {
    id: 1,
    postTitle: "Book Worm",
    postBody: "Aliquip ullamco Lorem reprehenderit minim velit.Ut ex tempor consequat elit cillum cupidatat eiusmod. Incididunt adipisicing eiusmod est Lorem duis amet. Officia consequat id enim deserunt in esse et dolor minim. Commodo ad est nisi officia irure ut proident minim nulla. Esse consectetur laboris qui voluptate. Ipsum excepteur dolor occaecat laborum do enim ex est aliquip et elit magna reprehenderit labore. Ex aute esse cillum Lorem commodo fugiat tempor ullamco Lorem occaecat ea reprehenderit magna. Ut fugiat ex duis magna irure. Commodo incididunt exercitation occaecat deserunt est. Deserunt minim mollit id officia laboris cupidatat fugiat elit eiusmod laborum officia eiusmod et esse. In occaecat duis culpa est nulla magna aliqua qui quis.",
    Category: "Turki",
    postDate: new Date().toLocaleDateString('en-GB').replace(/\//g, ' '),
    published: true
  },
  {
    id: 2,
    postTitle: "Heat Wave",
    postBody: "Aliquip ullamco Lorem reprehenderit minim velit.Ut ex tempor consequat elit cillum cupidatat eiusmod. Incididunt adipisicing eiusmod est Lorem duis amet. Officia consequat id enim deserunt in esse et dolor minim. Commodo ad est nisi officia irure ut proident minim nulla. Esse consectetur laboris qui voluptate. Ipsum excepteur dolor occaecat laborum do enim ex est aliquip et elit magna reprehenderit labore. Ex aute esse cillum Lorem commodo fugiat tempor ullamco Lorem occaecat ea reprehenderit magna. Ut fugiat ex duis magna irure. Commodo incididunt exercitation occaecat deserunt est. Deserunt minim mollit id officia laboris cupidatat fugiat elit eiusmod laborum officia eiusmod et esse. In occaecat duis culpa est nulla magna aliqua qui quis.",
    Category: "Turki",
    postDate: new Date().toLocaleDateString('en-GB').replace(/\//g, ' '),
    published: true
  },
];
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { posts: posts });
});

module.exports = router;