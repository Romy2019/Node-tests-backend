var express = require('express');
//var bookUpdate = require('.../model/bookTable');
var bookModel= require('../../models/bookTable')
exports.update = function(req, res) {
    //const update= new bookModel.bookTable(req.body);
    
    bookModel.bookTable.findByIdAndUpdate({'_id':req.params._id}, req.body, function (err, docs) {
      if(err){
          res.send('not found ');
      }
      else{
          res.send('successfully updated');
      }
      });
    
    
   
};