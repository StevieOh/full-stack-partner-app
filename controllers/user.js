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

//////////////////////////
// User Show Route
//////////////////////////
router.get('/userprofile', async (req, res) => {
  try{
    const user = await User.find({'username': req.session.username})
    
  }catch(err){
    res.send(err)
  }
})


module.exports = router