const express = require("express");
const router = express.Router()
const auth = require('../../middleware/auth')

const jobDetail = require("../../model/JobDetail")

router.get("/", auth, (req, res) => {
  jobDetail.find().sort({enterDate: -1})
    .then(msg => res.json(msg))
})

router.post("/", auth, (req, res) => {

  const newJob = new jobDetail({
    
    jobNumber: req.body.jobNumber,
    jobName: req.body.jobName,
    clientName: req.body.clientName,
    contactName: req.body.contactName,
    contactPhone: req.body.contactPhone,
    contactEmail: req.body.contactEmail,
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,

  })

  console.log("New Job Entered")
  console.log(newJob)
  newJob.save()
    .then(job => res.json(job))
})

router.delete("/:id", auth, (req, res) => {
  jobDetail.findOneAndRemove( {id: req.param.id})
    .then(job => (job.remove().then(()=> res.json({success: true}))))
    .catch(err => console.log(err))
})

module.exports = router