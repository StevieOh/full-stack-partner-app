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
      res.redirect('newsfeed');

    }else{
      req.session.message = "Username or Password is incorrect"
      res.redirect('/auth');
    }//end of if(bcrypt)
   }else{ 
    req.session.message = "Username or passwordis incorrect"
    res.redirect('/auth');
   }//end of if(user)
 }) 
})