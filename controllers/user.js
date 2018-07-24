const express = require('express');
const router = express.Router();
const User = require('../models/user')


router.get('/index.ejs', (req, res) => {
  res.send('newsfeed') 
})

//////////////////////////
// User Index  Route
//////////////////////////
router.get('/index', async (req, res) => {
  try{
    const foundUsers = await User.find({});
    res.render('users/index.ejs', {
      users: foundUsers,
      username: req.session.id
    })
  }catch(err){
    res.send(err)
  }
})




module.exports = router