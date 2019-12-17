const express = require("express");
const router = express.Router()
const auth = require('../../middleware/auth')

const jobDetail = require("../../model/JobDetail")


// find all jobs
// Access: PRIVATE
router.get("/", auth, (req, res) => {
  jobDetail.find().sort({ enterDate: -1 })
    .then(msg => res.json(msg))
})

// find one specific job
// Access: PRIVATE
router.get("/:id", auth, (req, res) => {
  const id = req.params.id
  jobDetail.find({ _id: id })
    .then(job => res.json({
      msg: "Success...",
      job
    }))
})


// add a new job
// Access: PRIVATE
router.post("/", auth, (req, res) => {
  console.log("POST ROuTER HIT JOB DETAILS")
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

  // console.log("New Job Entered")
  // console.log(newJob)
  newJob.save()
    .then(job => res.json(job))
})

// update a job
// Access: PRIVATE
// PATCH ###############
router.patch("/:id", auth, (req, res) => {
  // console.log("TIMELOG ROUTER PATCH")
  // console.log(req.body)
  // console.log(auth)
  const newTimeLog = {
    date: req.body.date,
    numberOfHours: req.body.numberOfHours,
    descriptionOfWork: req.body.descriptionOfWork,
    invoiced: false
  }
  const id = req.params.id
  // console.log(newTimeLog, id)
  jobDetail.findOneAndUpdate({ _id: id }, {
    $push: {
      timeLog: newTimeLog
    }
  })

    .exec()
    .then(result => {
      // console.log(res)
      res.status(200).json({
        msg: "Sucessfully added TimeLog",
        newTimeLog: newTimeLog,
        result: result
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        msg: "ERROR adding TimeLog",
        error: err
      })
    })

})


// delete a job
// Access: PRIVATE
// DELETE ###############
router.delete("/:id", auth, (req, res) => {
  jobDetail.findOneAndRemove({ _id: req.params.id })
    .then(job => (job.remove().then(() => res.json({ success: true }))))
    .catch(err => console.log(err))
})

module.exports = router