import React, { Component } from 'react';
import { FormGroup, Input, Label, Button } from 'reactstrap';

// CSS
import './invoice.css'

// REDUX
import { connect } from 'react-redux';
import { getSpecificJob } from '../../../../store/actions/jobDetailsActions'
import { sendInvoice } from '../../../../store/actions/admin/mailerActions';
import { read } from 'fs';




// GET ID
const location = window.location.href
const split = location.split("/")
const id = split[split.length - 1]
let preTotalHours = 0


// INVOICE CONTAINS
// - Bill To: company name, contact name, contact email
// - Invoiced Lines (timeLogs)
// - Total Hours
// - Rate
// - Invoice Total
// - Note
// - Templated note (Terms and Conditions) - NON-PRIORITY


class Invoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billingInfo: {
        companyName: "",
        contactName: "",
        contactEmail: "",
      },
      invoicedLines: [],
      totalHours: 0,
      rate: 0,
      invoiceTotal: 0,
      note: ""
    }

  }

  componentDidMount() {
    this.props.getSpecificJob(id)
  }

  handleNoteInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleAddLinesToInvoice = (log) => {
    // console.log("added!", log.numberOfHours)
    this.setState({
      invoicedLines: [...this.state.invoicedLines, log]
    }, () => console.log(this.state))
  }

  handleCreateAndSendInvoice = () => {
    const job = this.props.job.jobDetails.job[0]
    let totalHours = 0
    for (let i = 0; i < this.state.invoicedLines.length; i++) {
      totalHours = totalHours + parseInt(this.state.invoicedLines[i].numberOfHours)
    }
    let invoiceTotal = totalHours * job.rate
    this.setState({
      billingInfo: {
        companyName: job.clientName,
        contactName: job.contactName,
        contactEmail: job.contactEmail,
      },
      totalHours: totalHours,
      rate: job.rate,
      invoiceTotal: invoiceTotal

    }, () => this.readyInvoice())

  }

  runConsoleLogInfo = () => {
    console.log("=== CREATING AND SENDING INVOICE ===")
    console.log("Company Name: ", this.state.billingInfo.companyName)
    console.log("Contact Name: ", this.state.billingInfo.contactName)
    console.log("Contact Email: ", this.state.billingInfo.contactEmail)
    console.log("Total Lines: ", this.state.invoicedLines.length)
    console.log("Total Hours: ", this.state.totalHours)
    console.log("Rate: ", this.state.rate)
    console.log("Invoice Total: ", this.state.invoiceTotal)
    console.log("Note: ", this.state.note)
  }

  readyInvoice = () => {
    const readyInvoice = {
      companyName: this.state.billingInfo.companyName,
      contactName: this.state.billingInfo.contactName,
      contactEmail: this.state.billingInfo.contactEmail,
      invoicedLines: this.state.invoicedLines,
      totalHours: this.state.totalHours,
      rate: this.state.rate,
      invoiceTotal: this.state.invoiceTotal,
      note: this.state.note,
    }
    console.log(readyInvoice)
    this.props.sendInvoice(readyInvoice)
  }


  render() {


    const getTotalHours = () => {
      const job = this.props.job.jobDetails.job[0].timeLog

      for (let i = 0; i < job.length; i++) {
        if (job[i].invoiced === false) {
          preTotalHours += parseInt(job[i].numberOfHours)
        }
      }

      // this.setState({ totalHours: preTotalHours })
      // console.log(preTotalHours)

      return (
        <div>
          {/* Total Hours: {this.state.totalHours} */}
          <p>Total Uninvoiced Hours: {preTotalHours}</p>
          <p>Total Open: ${preTotalHours * this.props.job.jobDetails.job[0].rate}</p>
        </div>
      )
    }


    return (
      <div>
        {
          this.props.job.jobDetails.job ? (

            <div>

              <div className="jobDetail1">
                <div className="jobDetail1-info">
                  <span className="jobNumber">Job Number: {this.props.job.jobDetails.job[0].jobNumber}</span>
                  <span className="jobName">{this.props.job.jobDetails.job[0].jobName}</span>
                  <span className="clientName">{this.props.job.jobDetails.job[0].clientName}</span>
                </div>
                <div className="jobDetail1-functions">
                  <div className="jobDetail1-functions-upper">
                    <Button color="primary" onClick={() => this.handleCreateAndSendInvoice()}>Create and Send Invoice</Button>
                  </div>
                  <div className="jobDetail1-functions-lower">
                    <span>Start Date: {this.props.job.jobDetails.job[0].enterDate}</span>
                    <span>Rate: ${this.props.job.jobDetails.job[0].rate}/hr</span>
                    <span>{this.props.job.jobDetails.job[0]._id}</span>
                  </div>
                </div>
              </div>

              <div className="jobDetail2-details">
                <span className="contactName">{this.props.job.jobDetails.job[0].contactName}</span>
                <span className="contactPhone">{this.props.job.jobDetails.job[0].contactPhone}</span>
                <span className="contactEmail">{this.props.job.jobDetails.job[0].contactEmail}</span>
              </div>


              {/* {getTotalHours()} */}
              <Label>Invoice Note</Label>
              <Input type="textarea" className="invoice-note" name="note" onChange={this.handleNoteInputChange} />



              <div className="tabNav-timeLog">
                {
                  this.props.job.jobDetails.job[0].timeLog.map(log => (

                    log.invoiced === true ? (null) : (



                      <div className="tabNav-timeLog-detail">
                        {/* {preTotalHours = preTotalHours + parseInt(log.numberOfHours)} */}
                        {/* {this.setState({ totalHours: preTotalHours })} */}
                        <span>Date: {log.date}</span>
                        <span>Hours: {log.numberOfHours}</span>
                        <span>Description: {log.descriptionOfWork}</span>
                        <span>{log.invoiced ? (<span className="tabNav-timeLog-detail-invoiced">INVOICED</span>) : (<span className="tabNav-timeLog-detail-notInvoiced">NOT INVOICED</span>)}</span>

                        <Button size="sm" outline onClick={() => this.handleAddLinesToInvoice(log)} >Add to invoice</Button>


                      </div>
                    )

                  ))
                }
              </div>

            </div>


          ) : (<p>NO OPEN HOURS AVAILABLE FOR INVOICING</p>)
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({

  job: state.jobDetails,

})

export default connect(mapStateToProps,
  {
    getSpecificJob,
    sendInvoice
  }
)(Invoice);