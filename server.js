
const express        = require('express');
const bodyParser     = require('body-parser');
const mongoose       = require('mongoose');
const methodOverride = require('method-override')
const session        = require('express-session')
const app            = express();

// connection
require('./db/db')

// middle Ware
app.use(methodOverride('_method'))
app.use(bodyparser.urlencoded({extended:false}))
app.use((req, res, next) => {
	if(req.session.logIn === false){
		res.redirect('/auth/login')
	} else {
		next();
	}
})

/////////////////////////////////////
// controllers
/////////////////////////////////////

const postController = require('./controllers/post');
app.use('/post', postController)


// app.get('/', (req, res) => {
//   res.send("server works") 
// })

app.listen(3000, () => {
  console.log("server running on 3000")
})

