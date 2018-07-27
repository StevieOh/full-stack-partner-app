const mongoose = require('mongoose');

const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/obeyims';
// create db and connect
mongoose.connect(mongoUri,{useNewUrlParser: true})

mongoose.connection.on('connected', () => {
	console.log('mongoose is connected');
})
mongoose.connection.on('error', (err) => {
	console.log(err, 'mongoose error');
})

mongoose.connection.on('disconnect', () => {
	console.log('mongoose is disconnected')
})