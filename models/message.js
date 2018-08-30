const mongoose = require('mongoose');

constr messageSchema = new mongoose.Schema({
   user: String,
   message: String,
   date: {
     type: Date,
     default: Date.now
   }
})



mongoose.exports = mongoose.model('Message', messageSchema)
