const express = require('express');
const path = require('path');
require('dotenv').config();

const connectDB = require('./config/db');
const app = express();
const Blog = require('./models/blogModel');
const blogRoutes = require('./routes/blogRoutes');


app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.static(path.join(__dirname , 'public')));
app.use(express.urlencoded({extended : true}));
connectDB();


app.use(blogRoutes);

const PORT = 3000;
app.listen(PORT , () => {
  console.log(`Server running at address http://localhost:${PORT}`)
})