const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../utils/db');
const autoIncrement = require('mongoose-auto-increment');

var examSchema = new Schema ({
    eID: {
        type: Number, 
        required: true, 
        unique: true},  
    eDescription: {
        type: String, 
        required: true,   
    },
    questionsNumber: {
        type: Number, 
    },
    time: {
        type: Number, 
    },
    dateAdded : { type: Date, default: Date.now },
})

const Exam = mongoose.model('Exam', examSchema);
autoIncrement.initialize(mongoose.connection);
examSchema.plugin(autoIncrement.plugin, { model: 'Exam', field: 'eID' });

module.exports = {
    Exam
};
