const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title : {
  type  : String ,
  required : true 
  },
  shortDescription : {
    type : String , 
    required : true
  },
  content : {
    type : String , 
    required : true
  },
  category : {
    type : String , 
    required : true
  },
  date : {
    type : String , 
    required : true
  },
  isFeatured : {
    type : Boolean , 
    default : false
  },
})

module.exports = mongoose.model('Blog' , blogSchema);