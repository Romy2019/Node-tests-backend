var express = require('express');
//var bookView = require('.../model/bookTable');
var borrowModel = require('../models/borrowBooksModel')



exports.allList= function(req, res) {
    borrowModel.borrowTable.find({}, (err, results) => {
        if (err) {

            return res.status(500).send("Error getting user");
             }
             if(results.length < 1 || results == undefined){
                res.send("invalid input")//empty
            }
         //if user found.
        else{
            
             res.send(results);
           
            }
     
    
});}

