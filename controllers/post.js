const express = require('express');
const router  = express.Router();
const Post    = require('../models/post.js');



/// posts index route (timeline)
router.get('/', (req, res) => {

	res.render('post/index.ejs')
})



router.post('/', async (req, res) => {
	try{
		

	}catch(err){
		res.send(err)
	}
})


module.exports = router;


