const express = require('express');
const router  = express.Router();
const User    = require('../models/user')
const Post    = require('../models/post')

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
    res.redirect('/')
  }
  next();
})


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
    const foundUser = await User.find({});
    const mainUser = await User.findOne({'username': req.session.username})
    console.log(mainUser, " this is mainUser in the user show route ")
    console.log(req.session.username, " this is req.session.username in user show route")
    console.log(req.session.loggedIn, " this is req.session.loggedIn in user show route")
    res.render('user/show.ejs', {
      user: mainUser,
      post: req.session.post
    })
  }catch(err){
    res.send(err)
  }
})

//////////////////////////
// edit user
//////////////////////////

router.get('/editprofile', async (req, res) => {
  console.log('we are hiting the edit route')
  try{
    const foundUser = await User.find({'username': req.session.username})
    const foundPosts = await Post.find({})
    const foundUserPosts = await User.findOne({'posts': req.session.id})
    res.render('user/edit.ejs', {
      user: foundUser,
      post: foundPosts
    })
  }catch(err){
    res.send(err)
  }
})












module.exports = router