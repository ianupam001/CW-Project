// models/question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  trait_code: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
});

const Questions = mongoose.model('newQuestions', questionSchema);

module.exports = Questions;
