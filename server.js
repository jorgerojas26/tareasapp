const dotenv = require('dotenv'); 1
dotenv.config();
const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const morgan = require('morgan');

// initializations
const app = express();
require('./database');
require('./passport/local-auth');

// settings 
app.use(express.json());
app.set('port', process.env.PORT || 5000);
app.use(express.static(path.join(__dirname, 'client/build'))); // Serve the static files from the React app

// middlewares
app.use(morgan('dev'));
app.use(cookieParser());
app.use(passport.initialize())

// routes
app.use('/', require('./routes/index'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});