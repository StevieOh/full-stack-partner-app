const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

//===============================
//    Authentication Route
//===============================
router.get('/',(req, res) => {
 res.render('auth/login.ejs', {
  // message: req.session.message
 });
});



//===============================
//        Login Route
//===============================
router.post('/login', (req, res) => {
 User.findOne({username:req.body.username}, (err, user) => {
   if(user){
    if (bcrypt.compareSync(req.body.password, user.password)) {

      req.session.username = user.username;
      req.session.loggedIn = true;
      res.redirect('newsfeed');

    }else{
      req.session.message = "Username or Password is incorrect"
      res.redirect('/auth');
    }//end of if(bcrypt)
   }else{ 
    req.session.message = "Username or password is incorrect"
    res.redirect('/auth');
   }//end of if(user)
 }) 
})



//===============================
//     Hash Password Route
//===============================
router.post('/register', (req, res) => {
 const password = req.body.password;
 console.log(req.body.password)
 const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

 //create database entry
 User.create(userDBEntry, (err, user) => {
   res.session.username = user.username;
   res.session.loggedIn = true;
   res.redirect('users/news_feed')
 });
});

// ==============================
//        user friends
// ==============================
// a friends index page which has a button to follow
// router.get('/', async (req, res) => {
//   try{
    
//   }catch(err){
//     res.send(err)
//   }
// })
// when button clicks the userid goes into the friends array

// posts index route = timeline = // Posts where id in friends[] 
// (prob 2 queries 1: get my friends array, 2 get posts whose userid is in that array)



//===============================
//           Log Out
//===============================
router.get('logout', (req, res) => {
  req.session.destroy((err) => {
    if(err){
      res.send('err destroying session')
    }else{
      res.redirect('/auth')
    }
  }); 
});



module.exports = router;