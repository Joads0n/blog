const { Router } = require('express');
const PostController = require('../controllers/PostController');

const router = Router();

router
    .get('/posts', PostController.getAllPosts)
    .get('/posts/:id', PostController.getPostId)
    .post('/posts', PostController.createPost)
    .put('/posts/:id', PostController)
    .delete('/posts/:id', PostController)

module.exports = router;