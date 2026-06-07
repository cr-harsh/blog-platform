Blog Platform

A simple Blog Platform built using Node.js, Express.js, EJS, MongoDB, and Mongoose.
This project allows users to create, view, edit, delete, and feature blog posts.

Features
Add new blog posts
View all blogs on the home page
Read full blog details
Edit existing blogs
Delete blogs
Mark blogs as featured/unfeatured
View featured blogs separately
MongoDB Atlas integration
MVC-based project structure
Environment variables using .env

Tech Stack
Node.js
Express.js
EJS
MongoDB Atlas
Mongoose
dotenv
CSS

Main Routes
GET / - Show all blogs
GET /add-blog - Show add blog form
POST /add-blog - Create new blog
GET /blog/:id - Show blog details
GET /edit-blog/:id - Show edit form
POST /edit-blog/:id - Update blog
POST /delete-blog/:id - Delete blog
POST /toggle-featured/:id - Toggle featured status
GET /featured - Show featured blogs

Learning Outcomes

This project helped me understand:

Express routing
MVC folder structure
EJS templates
MongoDB Atlas connection
Mongoose schemas and models
CRUD operations with MongoDB
Dynamic routes using MongoDB \_id
Environment variables
Basic project structuring for backend applications
