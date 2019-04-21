const express = require("express");
const router = express.Router()
const auth = require('../../middleware/auth')

const contactMessage = require("../../model/ContactMessage")

router.get("/", (req, res) => {
  contactMessage.find().sort({date: -1})
    .then(msg => res.json(msg))
})

router.post("/", (req, res) => {
  const newMSG = new contactMessage({
    name: req.body.name,
    message: req.body.message,
    email: req.body.email,
  })
  newMSG.save()
    .then(msg => res.json(msg))
})

router.delete("/:id", auth, (req, res) => {
  contactMessage.findOneAndRemove( {id: req.param.id})
    .then(msg => (msg.remove().then(()=> res.json({success: true}))))
    .catch(err => console.log(err))
})

module.exports = router