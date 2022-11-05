const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  admno: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
});

module.exports = Student = mongoose.model('Student', StudentSchema);
