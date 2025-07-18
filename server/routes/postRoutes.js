const express = require('express');
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getMyPosts
} = require('../controllers/postcontroller'); // fixed case

const { protect } = require('../middleware/authMiddleware'); // ✅ Add this

const router = express.Router();

// Public routes
router.get('/', getPosts);
router.get('/:id', getPost);

// Protected routes (require logged-in user)
router.get('/mine', protect, getMyPosts);   
router.post('/', protect, createPost);        
router.put('/:id', protect, updatePost);      
router.delete('/:id', protect, deletePost);   
module.exports = router;
