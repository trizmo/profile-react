const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Details for each job
// SCHEMA
const JobDetailSchema = new Schema({
  jobNumber: {
    type: Number, 
    required: true
  },
  jobName: {
    type: String, 
    required: true
  },
  clientName: {
    type: String, 
    required: true
  },
  contactName: {
    type: String, 
    required: true
  },
  contactPhone: {
    type: String, 
    required: false
  },
  contactEmail: {
    type: String, 
    required: true
  },
  shortDescription: {
    type: String, 
    required: false
  },
  longDescription: {
    type: String, 
    required: false
  },
  timeLog: {
    type: [], 
    required: false
  },
  enterDate: {
    type: Date,
    default: Date.now, 
  },

})

module.exports = JobDetail = mongoose.model("JobDetail", JobDetailSchema)