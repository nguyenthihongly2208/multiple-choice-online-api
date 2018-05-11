const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../utils/db');

var userSchema = new Schema({
	email: {
        type: String, 
        required: true, 
        unique: true},
	password: { 
        type: String, 
        required: true },
    role:  { 
        type: String, 
        required: true },
    name: String,
    prename: String,
    school: String,
    class: String,
    description: String,
	dateAdded : { type: Date, default: Date.now },
})

const User = mongoose.model('User', userSchema);

var getUser = (callback, limit) => {
	User.find(callback).limit(limit);
}

module.exports = {
    User
};