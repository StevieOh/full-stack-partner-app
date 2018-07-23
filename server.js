
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const mongoose       = require('mongoose');
const methodOverride = require('method-override');
const session        = require('express-session');

// connection
require('./db/db')

/////////////////////////////////////
// controllers
/////////////////////////////////////

const postController = require('./controllers/post');
const userController = require('./controllers/auth')

app.use('/post', postController)
app.use('/auth', userController)


app.use(bodyParser.urlencoded({extended:false}));
// app.use(methodOverride('_method'));
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render("index.ejs") 
});

// middle Ware
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({extended:false}))


app.listen(3000, () => {
  console.log("server running on 3000")
})

