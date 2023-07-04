const router = require('express').Router();
const { getPosts, createPost } = require('../controllers/posts.controller');

router.get('/posts', getPosts);
router.post('/posts', createPost);

module.exports = router;