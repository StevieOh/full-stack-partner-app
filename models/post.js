const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
	userId: String,
	caption: String,
	photo: String,
	status: String,
	date: Date
})
module.exports = mongoose.model('Post', postSchema)