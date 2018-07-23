const express = require('express');
const router  = express.Router();
const Post    = require('../models/post.js');



/// posts index route (timeline)
router.get('/', (req, res) => {
	// all posts where the userid of that post is in the user's friends array

	res.render('post/index.ejs')
})



router.post('/', async (req, res) => {
	try{
		// const foundUser =

	}catch(err){
		res.send(err)
	}
})


module.exports = router;


