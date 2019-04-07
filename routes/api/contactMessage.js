const express = require("express");
const router = express.Router()

const contactMessage = require("../../model/ContactMessage")

router.get("/", (req, res) => {
  contactMessage.find()
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

module.exports = router