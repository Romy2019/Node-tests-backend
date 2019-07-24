var express = require('express');
var borrowRouter= express.Router();

var bookBorrow = require('../borrowOps/borrowBook')
var bookAll= require('../borrowOps/listAllBooks')

borrowRouter.post('/bororwBooksList',bookBorrow.borrowList);

borrowRouter.get('/allBooks',bookAll.allList);







module.exports = borrowRouter;

