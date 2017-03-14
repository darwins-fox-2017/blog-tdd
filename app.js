var express       = require('express');
var bodyParser    = require('body-parser');
var morgan        = require('morgan')
var cors          = require('cors');

var User          = require('./models/user');

var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var index         = require('./routes/index');
var article       = require('./routes/article');
var user          = require('./routes/user');

var mongoose      = require('mongoose');
mongoose.Promise  = global.Promise;
mongoose.connect('mongodb://localhost/blog')

var app           = express();

app.use(morgan())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//LOCAL STRATEGY
passport.use(new LocalStrategy(User.authenticate()));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use('/', index);
app.use('/article', article);
app.use('/user', user);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.listen(3000)
