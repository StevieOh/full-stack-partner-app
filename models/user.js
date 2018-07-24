const mongoose = require('mongoose');
const Post     = require('./post')
const Friend   = require('./friend')


const userSchema = new mongoose.Schema({
  username: {
    type:String, 
    required: true, 
    unique: true
  },
  password: {
    type:String, 
    required: true, 
    unique: true
  },
  photoId: String,
  // newsFeed: {
  // 	posts: [Post.schema],
  // 	friends: [Friend.schema]
  // },
  bio: String,
  posts: [Post.schema], // Posts where id in friends[] 
  friends: [String] 
})


module.exports = mongoose.model('User', userSchema);


