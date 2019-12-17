import React, { Component } from 'react'
import { Form, Input, FormGroup, Label } from 'reactstrap'

// REDUX
import { connect } from 'react-redux';
import { getSpecificJob } from '../../../store/actions/jobDetailsActions'

// CSS
import "./jobDetailPage.css"

// GET ID
const location = window.location.href
const split = location.split("/")
const id = split[split.length - 1]


class JobDetailPage extends Component {

  componentDidMount() {
    this.props.getSpecificJob(id)
  }

  render() {

    return (
      <div>
        {
          this.props.job.jobDetails.job ? (
            <div>
              <Form>

                <div className="jobDetail1">
                  <div className="jobDetail1-info">
                    <span className="jobNumber">Job Number: {this.props.job.jobDetails.job[0].jobNumber}</span>
                    <span className="jobName">{this.props.job.jobDetails.job[0].jobName}</span>
                    <span className="clientName">{this.props.job.jobDetails.job[0].clientName}</span>
                  </div>
                  <div className="jobDetail1-functions">
                    <div className="jobDetail1-functions-upper">
                      <span>Add</span>
                      <span>Edit</span>
                      <span>Invoice</span>
                    </div>
                    <div className="jobDetail1-functions-lower">
                      <span>Start Date: {this.props.job.jobDetails.job[0].enterDate}</span>
                      <span>Rate: {this.props.job.jobDetails.job[0].enterDate}</span>
                      <span>{this.props.job.jobDetails.job[0]._id}</span>
                    </div>
                  </div>
                </div>

                <div className="jobDetail2">
                  <span className="infoText">Contact Details:</span>
                  <div className="jobDetail2-details">
                    <span className="contactName">{this.props.job.jobDetails.job[0].contactName}</span>
                    <span className="contactPhone">{this.props.job.jobDetails.job[0].contactPhone}</span>
                    <span className="contactEmail">{this.props.job.jobDetails.job[0].contactEmail}</span>
                  </div>
                </div>

                <div className="jobDetail3">
                  <span className="shortDescription">{this.props.job.jobDetails.job[0].shortDescription}</span>
                  <span className="longDescription">{this.props.job.jobDetails.job[0].longDescription}</span>
                </div>

              </Form>

              <div className="tabNav">

                <div className="tabNavLinks">
                  <span className="tabNavLink">Time Log</span>
                  {/* <span className="tabNavLink">User Notes</span> */}
                  {/* <span className="tabNavLink">System Notes</span> */}
                </div>

                <div className="tabNav-timeLog">
                  {
                    this.props.job.jobDetails.job[0].timeLog.map(log => (
                      <div className="tabNav-timeLog-detail">
                        <span>Date: {log.date}</span>
                        <span>Total Hours: {log.numberOfHours}</span>
                        <span>Description: {log.descriptionOfWork}</span>
                        <span>{log.invoiced ? (<span className="tabNav-timeLog-detail-invoiced">INVOICED</span>) : (<span className="tabNav-timeLog-detail-notInvoiced">NOT INVOICED</span>)}</span>
                      </div>
                    ))
                  }
                </div>
              </div>

            </div>
          ) : (
              <h2>loading... {id}</h2>
            )
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
    getSpecificJob
  }
)(JobDetailPage);