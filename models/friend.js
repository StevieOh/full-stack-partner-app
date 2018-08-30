const mongoose = require('mongoose');
const User     = require('./user')


const friendSchema = new mongoose.Schema({
	user: String
})


module.exports = mongoose.model('Friend', friendSchema)
