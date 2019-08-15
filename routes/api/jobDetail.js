const express = require("express");
const router = express.Router()
const auth = require('../../middleware/auth')

const jobDetail = require("../../model/JobDetail")

router.get("/", auth, (req, res) => {
  jobDetail.find().sort({enterDate: -1})
    .then(msg => res.json(msg))
})

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


// PATCH ###############
router.patch("/:id", auth, (req, res) => {
  // console.log("TIMELOG ROUTER PATCH")
  // console.log(req.body)
  // console.log(auth)
  const newTimeLog = {
    date: req.body.date,
    numberOfHours: req.body.numberOfHours,
    descriptionOfWork: req.body.descriptionOfWork,
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



// DELETE ###############
router.delete("/:id", auth, (req, res) => {
  jobDetail.findOneAndRemove( { _id: req.params.id })
    .then(job => (job.remove().then(()=> res.json({success: true}))))
    .catch(err => console.log(err))
})

module.exports = router