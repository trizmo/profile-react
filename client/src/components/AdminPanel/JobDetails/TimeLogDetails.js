import React, { Component } from 'react'
import PropTypes from 'prop-types';

//REDUX
import { connect } from 'react-redux';
import { getJobDetails, deleteJobDetail } from '../../../store/actions/jobDetailsActions'

class TimeLogDetails extends Component {
  componentDidMount() {
    this.props.getJobDetails()
  }

  render() {
    const jobDetails = this.props.jobDetails.jobDetails
    const id = this.props.id

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
