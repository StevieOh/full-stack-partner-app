const express        = require('express');
const bodyParser     = require('body-parser');
const mongoose       = require('mongoose');
const methodOverride = require('method-override')
const session        = require('express-session')
const app            = express();


// connection
require('/db/db')