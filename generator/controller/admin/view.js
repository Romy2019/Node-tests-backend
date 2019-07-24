var express = require('express');
//var bookView = require('.../model/bookTable');
var borrowModel = require('../../models/borrowBooksModel')
var bookModel= require('../../models/bookTable')

exports.view= function(req, res) {
    bookModel.bookTable.find({}, (err, results) => {
        if (err) {

            return res.status(500).send("Error getting user");
             }
             if(results.length < 1 || results == undefined){
                res.send("no books in library")//empty
            }
 
         //if user found.
        else{
            
             res.send(results);
           
            }
        });
}



exports.viewBorrow= function(req, res) {
    borrowModel.borrowTable.find({}, (err, results) => {
        if (err) {

            return res.status(500).send("Error getting user");
             }
             if(results.length < 1 || results == undefined){
                res.send("no books borrowed")//empty
            }
         //if user found.
        else{
            
             res.send(results);
           
            }
        });
}