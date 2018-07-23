const mongoose = require('mongoose');
const Post     = require('./post')
const Friend   = require('./friend')


const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  photoId: String,
  // newsFeed: {
  // 	posts: [Post.schema],
  // 	friends: [Friend.schema]
  // },
  posts: [Post.schema], // Posts where id in friends[] 
  friends: [String] 
})


module.exports = mongoose.model('User', userSchema);


