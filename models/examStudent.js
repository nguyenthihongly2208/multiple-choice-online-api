const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../utils/db');
const autoIncrement = require('mongoose-auto-increment');

var examStudentSchema = new Schema({
    esID: {
        type: Number, 
        required: true, 
        unique: true},
    eID: {
        type: Number, 
        required: true,},
    userID: { 
        type: String, 
        required: true },
    status:  { 
        type: String, 
        required: true,},
    mark: { 
        type: String, 
        required: true },
	dateAdded : { type: Date, default: Date.now },
})

const ExamStudent = mongoose.model('ExamStudent', examStudentSchema);
autoIncrement.initialize(mongoose.connection);
examStudentSchema.plugin(autoIncrement.plugin, { model: 'ExamStudent', field: 'esID' });

module.exports = {
    ExamStudent
};