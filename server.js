
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const mongoose       = require('mongoose');
const methodOverride = require('method-override');
const session        = require('express-session');

// connection
require('./db/db')

//===========================
//    USE MIDDLEWARE
//===========================
app.use(bodyParser.urlencoded({extended:false}));
// app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(session({
  secret: 'this is a random secret string that you make up',
  resave: false,///only save when the session object has been modified
  saveUnititialized: false //useful for login sessions, we only want to save when we modift the session
}));


/////////////////////////////////////
// controllers
/////////////////////////////////////

const postController = require('./controllers/post');
const authController = require('./controllers/auth');
const userController = require('./controllers/user')

app.use('/post', postController)
app.use('/auth', authController)
app.use('/user', userController)


app.get('/', (req, res) => {
  res.render("index.ejs") 
});

app.get('/news_feed', (req, res) => {
	res.render('news_feed.ejs')
})


app.get('/contact', (req, res) => {
  res.render('contact.ejs')
})

app.get('/about', (req, res) => {
  res.render('about.ejs')
})
app.listen(3000, () => {
  console.log("server running on 3000")
})

