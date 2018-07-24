const express = require('express');
const router  = express.Router();
const Post    = require('../models/post.js');
const User    = require('../models/user.js')



/// posts index route (timeline)
router.get('/', (req, res) => {

	res.render('post/index.ejs')
})



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
		res.redirect('news_feed.ejs')
	}catch(err){
		res.send(err)
	}
})



module.exports = router;


