const express = require("express");
const router = express.Router()
const auth = require('../../../middleware/auth')
const nodemailer = require("nodemailer")

// sends invoice to the contactEmail
// Access: PRIVATE
router.post("/", auth, (req, res) => {
  const invoice = {
    companyName: req.body.companyName,
    contactName: req.body.contactName,
    contactEmail: req.body.contactEmail,
    invoicedLines: req.body.invoicedLines,
    totalHours: req.body.totalHours,
    rate: req.body.rate,
    invoiceTotal: req.body.invoiceTotal,
    note: req.body.note,

  }

  const invoiceHtml = () => {
    const html =
      `
      <div style="width: 600px" >
        <h3 style="text-align: center;">INVOICE</h3>
        <div
        style="
        border-bottom: 2px grey solid;
        padding: 10px;
        ">
          <span style="display:block">Invoice #: 0011</span>
          <span style="display:block">Invoice Date: December 20, 2019</span>
          <h4>${invoice.companyName}</h4>
          <span style="display:block">${invoice.contactName}</span>
          <span style="display:block">${invoice.contactEmail}</span>
          </div>
          ${invoice.invoicedLines.map(line => (
        `<div style="
            border-bottom: 1px grey double;
            padding: 10px 10px 10px 30px;
            ">
            <span style="display:block">Date: ${line.date}</span>
            <span style="display:block">Hours: ${line.numberOfHours}</span>
            <span style="display:block">Description: ${line.descriptionOfWork}</span>
            </div>`
      ))}
            
            <div style="
            border-bottom: 2px grey solid;
        padding: 10px;
        ">
        <span style="display:block">Total Hours: ${invoice.totalHours}</span>
        <span style="display:block">Rate: $${invoice.rate} /hr</span>
        <span style="display:block; font-size: 1.1rem; font-weight: 600">Total Amount: $${invoice.invoiceTotal}</span>
        </div>

        <p>${invoice.note}</p>

        <h3 style="text-align: center;">Payment Information</h3>
        <span style="display:block">CHECK - Please make checks payable to Tristan Perera</span>
        <span style="display:block">CASH - Accepted!</span>
        <span style="display:block">PayPal - Link to Paypal Payment</span>
        <span style="display:block">VISA / MasterCard / AMEX - Coming soon!</span>
        <span style="display:block">Bitcoin - 3Qpdm4ckJ64irx1Nuyw9ZCCvc2qxoqkuBY</span>
        <span style="display:block">XRP - 3Qpdm4ckJ64irx1Nuyw9ZCCvc2qxoqkuBY</span>


        

      </div>

      
      `

    return (
      html.toString()
    )
  }

  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'trizmocalifornia@yahoo.com',
      pass: 'Elijah123!'
    }
  });

  const mailOptions = {
    from: 'trizmocalifornia@yahoo.com',
    // to: 'edeer@ramcast.net',
    to: 'tristan.e.perera@gmail.com',
    subject: 'Invoice from Tristan- CalDev',
    // text: "Company name: " + invoice.companyName
    // text: "\n NAME: " + customerContact.name + "\n EMAIL: " + customerContact.email + "\n PHONE: " + customerContact.telephone + "\n BUSINESS TYPE: " + customerContact.business + "\n MESSAGE: " + customerContact.message + "\n CITY: " + customerContact.city
    html: invoiceHtml()

  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.send("email sent")

})

{/* ${invoice.invoicedLines.map(line => (
        <div>
          <p>Date: {line.date} </p>
          <p>Hours: {line.numberOfHours} </p>
          <p>Description: {line.descriptionOfWork} </p>
        </div>
      ))} */}

// TEST GET TEST
// Access: PRIVATE
router.get("/", auth, (req, res) => {

  res.send("get works")

})



module.exports = router