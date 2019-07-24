var express = require('express');
var userRouter= express.Router();




var userLog = require('../controller/user/login');
var userSign = require('../controller/user/signup')
userRouter.post('/LogIn',userLog.userLogIn);
userRouter.post('/SignUp',userSign.userSignUp);

module.exports=userRouter;