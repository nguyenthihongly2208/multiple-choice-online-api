const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../utils/db');

var groupSchema = new Schema ({
    qgID: {
        type: String, 
        required: true, 
        unique: true},  
    qbID: {
        type: String, 
        required: true,    
    },
    qgName: {
        type: String, 
        required: true,   
    },
    qgDescription: {
        type: String, 
    },
    dateAdded : { type: Date, default: Date.now },
})

const Group = mongoose.model('Group', groupSchema);

module.exports = {
    Group
};
