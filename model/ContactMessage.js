const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Contact messages from user
// SCHEMA
const ContactMessageSchema = new Schema({
  name: {
    type: String, 
    required: true
  },
  message: {
    type: String, 
    required: true
  },
  email: {
    type: String, 
    required: true
  },
  date: {
    type: Date,
    default: Date.now, 
  },

})

module.exports = ContactMessage = mongoose.model("ContactMessage", ContactMessageSchema)