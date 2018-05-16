const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../utils/db');
const autoIncrement = require('mongoose-auto-increment');

var examStudentDetailSchema = new Schema({
    esdID: {
        type: Number, 
        required: true, 
        unique: true},
    esID: {
        type: Number, 
        required: true,},
    eqID: { 
        type: String, 
        required: true },
    responseChoice:  { 
        type: String, 
        required: true,},
	dateAdded : { type: Date, default: Date.now },
})

const ExamStudentDetail = mongoose.model('ExamStudentDetail', examStudentDetailSchema);
autoIncrement.initialize(mongoose.connection);
examStudentDetailSchema.plugin(autoIncrement.plugin, { model: 'ExamStudentDetail', field: 'esdID' });

module.exports = {
    ExamStudentDetail
};