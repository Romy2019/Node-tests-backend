var con= require("./connection/connection");
var middleware =("./middleware/")
//middleware

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');




var borrow = require('./routes/borrowerOps')
var user=require('./routes/users');
var admin =require('./routes/adminOps');
var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/admin',admin);
app.use('/user',user);
app.use('/borrow',borrow);
module.exports = app;


