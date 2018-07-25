const express = require('express');
const router  = express.Router();
const Post    = require('../models/post.js');
const User    = require('../models/user.js')


// some middleware
router.use((req, res, next) => {
  console.log("")
  console.log("")
  console.log("")
  console.log("")
  console.log('checking login');
  console.log("")
  console.log("")
  console.log("")
  console.log("")

  if(req.session.loggedIn === false){
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log('not logged in')
    res.redirect('/')
  }else{
  	console.log("")
  	console.log("")
  	console.log("")
  	console.log("")
  	console.log('logged In')
  	console.log("")
  	console.log("")
  	console.log("")
  	console.log("")
  	console.log("")
  }
  next();
})


/// posts index route (timeline)
router.get('/', (req, res) => {
	res.render('post/news_feed.ejs',{
		user: req.session.username
	})
})

// New Route
router.get('/makepost', async (req, res) => {
	try{
		const foundUser = await User.find({});
		res.render('post/new.ejs', {
			allUsers: foundUser
		})

	}catch(err){
		res.send(err)
	}
})

// New Route: Post Route
router.post('/', async (req, res) => {
	try{
		const user = await User.find({'username': req.session.username});
		const post = {
			userId: user.id,
			photoURL: req.body.photoURL,
			status: req.body.status
		}
		const newPost = await Post.create(post)
		user.post.push(newPost);
		user.save();
		console.log(user.post, 'this is user.post')
		res.redirect('/post');
	}catch(err){
		res.send(err)
	}
})

// show Route
router.get('/showpost', async (req, res) => {
	try{

	}catch(err){
		console.log('')
		console.log(err, 'this is an err')
		console.log('')
		res.send(err)
	}
})


module.exports = router;


