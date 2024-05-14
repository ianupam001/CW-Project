const mongoose = require("mongoose");

const createUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },

});


const CreateUser = mongoose.model("Details", createUserSchema);

module.exports = CreateUser;
