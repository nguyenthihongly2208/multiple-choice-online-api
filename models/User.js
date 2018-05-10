var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	email: {type: String, required: true, unique: true},
	password: { type: String, required: true },
    role: String,
    name: String,
    prename: String,
    school: String,
    class: String,
    description: String,
	dateAdded : { type: Date, default: Date.now },
})

var User = mongoose.model('User', userSchema);
module.exports = User;
