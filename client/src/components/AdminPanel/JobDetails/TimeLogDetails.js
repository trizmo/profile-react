import React, { Component } from 'react'
import PropTypes from 'prop-types';

//REDUX
import { connect } from 'react-redux';
import { getJobDetails, deleteJobDetail } from '../../../store/actions/jobDetailsActions'

class TimeLogDetails extends Component {
  componentDidMount() {
    this.props.getJobDetails()
    // console.log("job details running")
  }

  showTimeLogs(jobDetails) {
    const id = this.props.id

    console.log("helper working")
    for (let i = 0; i < jobDetails.length; i++) {
      if (jobDetails[i]._id == id) {
        jobDetails[i].timeLog.map(log => (
          <div>
            {
              // console.log(jobDetails[i]._id + " | " + id + " | " + log.descriptionOfWork)
            }
            <p>            {jobDetails[i]._id}  | {id} {log.descriptionOfWork} </p>
            {/* console.log(log.descriptionOfWork) */}
          </div>
          // <p>{log.descriptionOfWork}</p>
          // {/* <p>{this.props.id}</p> */}

        ))
      }
    }
  }

  render() {
    const jobDetails = this.props.jobDetails.jobDetails
    const id = this.props.id
    // console.log("id: " + id)
    console.log("jobDetails: ", jobDetails)
    // jobDetails[0]._id === id ? (console.log("match: " + jobDetails[0]._id, id )):(null)

    for (let i = 0; i < jobDetails.length; i++) {
      if (jobDetails[i]._id == id) {
        return (
          jobDetails[i].timeLog.map(log => (
            <div className="timeLogDetail">
              {log.date} | {log.numberOfHours}hrs | {log.descriptionOfWork} 
            </div>
          ))
        )
      }

    }
  }
}

TimeLogDetails.propTypes = {
  jobDetails: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  jobDetails: state.jobDetails,
  auth: state.auth
})

export default connect(mapStateToProps,
  {
    getJobDetails,
    deleteJobDetail

  })(TimeLogDetails);
