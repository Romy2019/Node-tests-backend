var express = require('express');
var borrowModel= require('../models/borrowBooksModel')
var bookModel = require('../models/bookTable')

exports.borrowList = function(req, res) {

    var borrowBooks =new borrowModel.borrowTable( req.body);
    borrowBooks.save(function (err, success) {

      if (err) {
        res.send("Error" + err)
                } 
      /*if(success.length < 1 || success == undefined){
                  res.send("invalid input")//empty
              }*/
    else {
        bookModel.bookTable.findOneAndUpdate(
          {
           "bookTitle" : borrowBooks.bookName },
         { $inc: { "bookCount": -(borrowBooks.borrowCount) } }, function(err, doc)
        
         {
           if (err) 
           return res.send(500, { error: err });
             return res.send(doc);
         });
      
  
      }
  
   });
   }






