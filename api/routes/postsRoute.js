const { Router } = require('express');
const PostController = require('../controllers/PostController');

const router = Router();

router
    .get('/posts', PostController.getAllPosts)
    .get('/posts/:id', PostController.getPostId)
    .post('/posts', PostController.createPost)
    .put('/posts/:id', PostController.updatePost)
    .delete('/posts/:id', PostController.deletePost)

module.exports = router;