const express = require("express");
const router = express.Router()
const auth = require('../../middleware/auth')

const timeLog = require("../../model/TimeLog")

router.get("/", (req, res) => {
  timeLog.find().sort({enterDate: -1})
    .then(msg => res.json(msg))
})

router.post("/", (req, res) => {

  const newTimeLog = new TimeLog({
    jobNumber: req.body.jobNumber,
    date: req.body.date,
    timeStart: req.body.timeStart,
    timeEnd: req.body.timeEnd,
    dow: req.body.dow,
    rate: req.body.rate,
  })

  console.log("New TimeLog Entered")
  console.log(newTimeLog)

  newTimeLog.save()
    .then(timeLog => res.json(timeLog))

})

router.delete("/:id", auth, (req, res) => {
  jobDetail.findOneAndRemove( {id: req.param.id})
    .then(job => (job.remove().then(()=> res.json({success: true}))))
    .catch(err => console.log(err))
})



module.exports = router