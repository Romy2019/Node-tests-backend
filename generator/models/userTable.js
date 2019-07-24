var mongoose = require('mongoose')
var Schema = mongoose.Schema;

  var userSchema = new Schema({
    userName:  { type: String,  required: [true, 'user name must be provided'] },
    userType: { type: String,  required: [true, 'user type should be provided'] }
    });
    var userTable = mongoose.model('userTable', userSchema);
    module.exports={userTable}
    