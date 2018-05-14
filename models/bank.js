const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../utils/db');

var bankSchema = new Schema ({
    qbID: {
        type: String, 
        required: true, 
        unique: true},  
    qbName: {
        type: String, 
        required: true,   
    },
    qbDescription: {
        type: String, 
    },
    dateAdded : { type: Date, default: Date.now },
})

const Bank = mongoose.model('Bank', bankSchema);

module.exports = {
    Bank
};
