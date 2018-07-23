const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
	caption: String,
	photo: String,
	status: String
})
module.exports = mongoose.model('Post', postSchema)