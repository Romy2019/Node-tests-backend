var express = require('express');
var router = express.Router();

console.log("[ADMIN APIS]");

// Require controller modules.
var bookadd = require('../controller/admin/add');
var bookdelete = require('../controller/admin/delete');
var bookupdate = require('../controller/admin/update');
var bookview = require('../controller/admin/view');


router.post('/bookAdd', bookadd.add);
router.delete('/bookDelete',bookdelete.delete);
router.put('/bookUpdate/:_id',bookupdate.update);
router.get('/bookView',bookview.view);
router.get('/bookBorrowView',bookview.viewBorrow);
module.exports=router;