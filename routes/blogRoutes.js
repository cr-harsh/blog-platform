const express = require('express');
const router = express.Router();
const {getHomePage , showBlogForm , createBlog , toggleFeatured , showBlogDetails , showBlogEditForm , saveEditedBlog , deleteBlog , showFeaturedBlogs} = require('../controllers/blogController');


router.get('/' , getHomePage);

router.get('/add-blog' , showBlogForm);

router.post('/add-blog', createBlog);

router.post('/toggle-featured/:id' , toggleFeatured);

router.get('/blog/:id' , showBlogDetails);

router.get('/edit-blog/:id' , showBlogEditForm);

router.post('/edit-blog/:id' , saveEditedBlog);

router.post('/delete-blog/:id' , deleteBlog); 

router.get('/featured' , showFeaturedBlogs);

module.exports = router;