const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../utils/db');

var questionSchema = new Schema ({
    qID: {
        type: String, 
        required: true, 
        unique: true},  
    qgID: {
        type: String, 
        required: true,    
    },
    type: {
        type: String, 
        required: true,   
    },
    qContent: {
        type: String, 
        required: true,   
    },
    dateAdded : { type: Date, default: Date.now },
})

const Question = mongoose.model('Question', questionSchema);

module.exports = {
    Question
};
