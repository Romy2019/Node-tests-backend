var express= require('express');
var uSchema = require('../models/userTable')

exports.userauth = function(req, res,next) {
if(req.params===admin)
next();
else{
    console.log('you are not admin');
}
}