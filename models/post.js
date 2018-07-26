const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
	username: String,
	caption: String,
	photoURL: String,
	status: String,
	date: {
		type: Date,
		default: Date.now
	}
})
module.exports = mongoose.model('Post', postSchema)