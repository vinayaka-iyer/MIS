const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  AdmNo: {
    type: Number,
    required: true,
    unique: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Year: {
    type: Number,
    required: true,
  },
  Section: {
    type: String,
    required: true,
  },
  RecordDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Student = mongoose.model('Student', StudentSchema);
