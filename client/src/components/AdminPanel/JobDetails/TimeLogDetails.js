import React, { Component } from 'react'
import PropTypes from 'prop-types';

//REDUX
import { connect } from 'react-redux';
import { getJobDetails, deleteJobDetail } from '../../../store/actions/jobDetailsActions'

const totalHours = 0

class TimeLogDetails extends Component {
  componentDidMount() {
    this.props.getJobDetails()

    // const findtotalHours = () => {
    //   if (this.jobDetails[i].TimeLogDetail) {
    //     for (let j = 0; j < jobDetails[i].TimeLogDetail.length; j++) {
    //       return totalHours = totalHours + jobDetails[i].TimeLogDetail[j].numberOfHours
    //     }
    //   }
    // }

    // if (jobDetails.length > 100) {
    //   for (let i = 0; i < jobDetails.length; i++) {
    //     if (jobDetails[i]._id == id) {

    //       this.findtotalHours()


    //     }
    //   }
    // }




  }

  render() {
    const jobDetails = this.props.jobDetails.jobDetails
    // const jobDetails = this.props.jobDetails.jobDetails
    const id = this.props.id



    return (
      <div>
        <p> Total Hours: {totalHours}</p>
        <p> ID: {id}</p>
      </div>

      // jobDetails[i].timeLog.map(log => (
      //   <div className="timeLogDetail">
      //     {log.date} | {log.numberOfHours}hrs | {log.descriptionOfWork} 
      //   </div>
      // ))
    )

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
