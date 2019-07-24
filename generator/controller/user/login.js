var express = require('express');
var addUser = require('../../models/userTable');


exports.userLogIn = function(req, res) {
    var userlog =req.body;
    addUser.userTable.find({ 'userName':userlog.userName},(err, docs) => {
            
       if (err) {

           return res.status(500).send("Error getting user");
            }

        //if user found.
        if(docs.length < 1 || docs == undefined){
            res.send("invalid log in")//empty
        }
        else{
            res.send("logged in user "+userlog.userName);
           }
    
               // return results;//console.log('logged in user' + userlog.userName);      
                                                
             
        });

   
};
