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
router.get('/', async (req, res) => {
 //  	console.log("")
 //  	console.log("")
	// console.log("hitting the post get '/' route")
 //  	console.log("")
 //  	console.log("")
  	try{
  		const theUser = await User.find({'username': req.session.username})
  		const thePost = await Post.find({})
		res.render('post/news_feed.ejs',{
			user: theUser[0],
			post: thePost
	})
	}catch(err){
		res.send(err)
	}
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

// Create Route
router.post('/', async (req, res) => {
	console.log("we hit the post route")
	try{
		const user = await User.findOne({'username': req.session.username});

		console.log(user)
		const post = {
			userId: user.id,
			username: user.username,
			caption: req.body.caption,
			photoURL: req.body.photoURL,
			status: req.body.status,
      video: req.body.video
		}
		const newPost = await Post.create(post)
		user.posts.push(newPost);
		const result = await user.save();
		console.log(user.posts, 'this is user.posts')
		res.redirect('/post');
	}catch(err){
		console.log("error in post post route", err)
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
