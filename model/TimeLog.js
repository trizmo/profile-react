const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// To Log Hours for Time Worked
// each timeLog is a block of hours worked
// contains:
// - date worked
// - time started
// - time finished
// - related to jobNumber
// - Description Of Work
// - rate


// SCHEMA
const TimeLogSchema = new Schema({

  jobNumber: {
    type: Number, 
    required: true
  },
  date: {
    type: Date, 
    default: Date.now
  },
  timeStart: {
    type: Date, 
    default: Date.now
  },
  timeEnd: {
    type: Date,
    default: Date.now, 
  },
  dow: {
    type: String,
    required: false, 
  },
  rate: {
    type: Number,
    required: true, 
  }

})

module.exports = TimeLog = mongoose.model("TimeLog", TimeLogSchema)