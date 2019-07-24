var express = require('express');
var addUser = require('../../models/userTable');



exports.userSignUp = function(req, res) {
    const userAdd = new addUser.userTable(req.body);
    
    userAdd.save(function(err,success){
      if(err){
        res.send("error"+err)
      }else{
        
        res.send('user created')
        
      }
    });

   
};
