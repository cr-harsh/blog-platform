const Blog = require('../models/blogModel');


const getHomePage = async (req , res) => {
const blogs = await Blog.find();  
res.render('home' , {blogs });
} 

const showBlogForm = async (req , res) => {
res.render('add-blog');
}

const createBlog = async (req , res) => {
req.body.isFeatured = req.body.isFeatured === 'on';
await Blog.create(req.body);
res.redirect('/');
}

const toggleFeatured = async (req , res) => {
const blogId = req.params.id;
const blog = await Blog.findById(blogId);
blog.isFeatured = !blog.isFeatured;
await blog.save();
res.redirect('/');
}

const showBlogDetails = async (req , res) => {
const blogId = req.params.id;
const blog = await Blog.findById(blogId);
res.render('blog-details' , {blog})
}

const showBlogEditForm = async (req , res) => {
const blogId = req.params.id;
const blog = await Blog.findById(blogId);
res.render('edit-blog' , {blog});
}

const saveEditedBlog = async (req , res) => {
const blogId = req.params.id;
const updatedData = req.body;
updatedData.isFeatured = req.body.isFeatured === 'on';
await Blog.findByIdAndUpdate(blogId , updatedData);
res.redirect('/');
}

const deleteBlog = async (req , res) => {
const blogId = req.params.id;
await Blog.findByIdAndDelete(blogId);
res.redirect('/');
}

const showFeaturedBlogs = async (req , res) => {
const blogs = await Blog.find({isFeatured : true});
res.render('featured' , {blogs});
}

module.exports = {getHomePage , showBlogForm , createBlog , toggleFeatured , showBlogDetails , showBlogEditForm , saveEditedBlog , deleteBlog , showFeaturedBlogs};