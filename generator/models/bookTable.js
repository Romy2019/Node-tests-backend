var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var bookSchema = new Schema({
    bookTitle: { type: String,  required: [true, 'booktitle must be provided'] },
    bookAuthor: { type: String,  required: [true, 'auther name must be provided'] },
    bookDetail: { type: String,  required: [true, 'book detail must be provided'] },
    bookCount: { type: Number,  required: [true, ' count must be provided'] }
    });
    var bookTable = mongoose.model('bookTable',bookSchema);
    module.exports={bookTable}