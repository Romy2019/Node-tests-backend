var express = require('express');
var bookModel= require('../../models/bookTable')
//var bookAdd = require('.../models/bookTable');

exports.add = function(req, res) {
    const addBooks = new bookModel.bookTable(req.body);
    addBooks.save(function (err, success) {
      if (err) {
        res.send("Error" + err)
      } else {
        console.log(success);
        res.send('book inserted ');
  
      }
      // saved!
    });
};
