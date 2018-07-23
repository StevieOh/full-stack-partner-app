const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

//===============================
//    Authentication Route
//===============================
router.get('/',(req, res) => {
 res.render('auth/login.ejs', {
 message: req.session.message
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
      res.redirect('users/index.ejs');

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
 console.log(req.body.password, "<-----this is req.body password")
 const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const userDBEntry = {};
userDBEntry.username = req.body.username;
userDBEntry.password = password;

 //create database entry
 User.create(userDBEntry, (err, user) => {
   res.session.username = user.username;
   res.session.loggedIn = true;
   res.redirect('users/news_feed')

 });
});



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