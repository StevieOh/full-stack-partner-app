const express = requrie('express');
const app = express();
const bodyParser = require('body-parser')

app.get('/', (req, res) => {
  res.send("server works") 
})

