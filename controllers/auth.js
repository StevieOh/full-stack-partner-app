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