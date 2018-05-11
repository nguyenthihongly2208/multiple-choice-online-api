const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../utils/db');

var userSchema = new Schema({
    userID: {
        type: String, 
        required: true, 
        unique: true},   
	email: {
        type: String, 
        required: true, 
        unique: true},
	password: { 
        type: String, 
        required: true },
    role:  { 
        type: String, 
        required: true,
        default: 'user'},
    name: String,
    prename: String,
    school: String,
    class: String,
    description: String,
	dateAdded : { type: Date, default: Date.now },
})

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};