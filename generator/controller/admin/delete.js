var express = require('express');
//var bookDelete = require('.../model/bookTable');
var bookModel= require('../../models/bookTable')


exports.delete = function(req, res) {

   var bookBody= new bookModel.bookTable(req.body);
   bookModel.bookTable.remove({'bookTitle':bookBody.bookTitle},function(err, result) { 
    if (err) {

        return res.status(500).send("Error getting user");
         }

     //if user found.
    else{
        
         res.send('document deleted');
        }
   // res.send( (result === 1) ? { msg: 'book deleted' } : { msg: 'error: '+ err } );
    });
}