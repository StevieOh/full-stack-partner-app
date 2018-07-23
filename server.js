
const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const mongoose       = require('mongoose');
const methodOverride = require('method-override');
const session        = require('express-session');

// connection
require('./db/db')

const userController = require('./controllers/auth')

app.use(bodyParser.urlencoded({extended:false}));
// app.use(methodOverride('_method'));
app.use(express.static('public'));

app.use('/auth', userController)



app.get('/', (req, res) => {
  res.render("index.ejs") 
})

app.listen(3000, () => {
  console.log("server running on 3000")
})

