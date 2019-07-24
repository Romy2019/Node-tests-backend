var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var borrowSchema = new Schema({
    bookName:  { type: String,  required: [true, 'book name must be provided'] },
    borrowerName:{ type: String,  required: [true, 'borrower name must be provided'] },
    borrowCount: { type: Number,  required: [true, 'borrow count must be provided'] },
    borrowStatus:{ type: String,  required: [true, 'borrow status must be provided'] }
    });
    var borrowTable = mongoose.model('borrowTable', borrowSchema);
    module.exports={borrowTable}