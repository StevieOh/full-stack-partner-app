
const express        = require('express');
const bodyParser     = require('body-parser');
const mongoose       = require('mongoose');
const methodOverride = require('method-override')
const session        = require('express-session')
const app            = express();

// connection
require('./db/db')

app.get('/', (req, res) => {
  res.send("server works") 
})

app.listen(3000, () => {
  console.log("server running on 3000")
})

