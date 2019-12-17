import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

//REDUX
import { connect } from 'react-redux';
import { getJobDetails, deleteJobDetail } from '../../../store/actions/jobDetailsActions'
import AddNewJob from './AddNewJob';
import TimeLogDetails from './TimeLogDetails'

//COMPONENTS


class jobDetails extends Component {

  componentDidMount() {
    this.props.getJobDetails()
    // console.log("job details running")
  }

  render() {
    const { isAuthenticated } = this.props.auth
    const jobDetails = this.props.jobDetails.jobDetails

    return (
      <Container>
        <Button outline color="primary"> <a href="/lejonbrames/jobs/addnewjob" to="/lejonbrames/jobs/addnewjob">Add New Job</a></Button>
        {jobDetails !== undefined ? (
          jobDetails.map(job => (
            <ListGroup style={styles.wrapper}>
              <TransitionGroup>
                <CSSTransition>
                  <ListGroupItem style={styles.messageContainer}>
                    <div style={styles.message}>
                      <p>Job name: {<strong><a href={`/lejonbrames/jobs/detail/${job._id}`}>{job.jobName}</a></strong>}</p>
                      <p>Client: {<strong>{job.clientName}</strong>}</p>
                      <p>Description: {<strong>{job.shortDescription}</strong>}</p>
                      <p>Start Date: {<strong>{job.enterDate}</strong>}</p>
                    </div>
                    <Button outline color="success" href={`/lejonbrames/jobs/addtimelog/?${job._id}`} to="/lejonbrames/jobs/addtimelog/?:id" params={job._id}
                    // onClick={ () => alert("clicked!: " + job._id) }
                    >
                      Add Time Log
                    </Button>
                    <Button onClick={() => this.props.deleteJobDetail(job._id)} style={styles.deleteButton} outline color="danger">
                      Delete
                    </Button>

                    <TimeLogDetails id={job._id} />


                    {/* {job.timeLog.length > 0 ? (
                      job.timeLog.map(log => (
                      <div>
                        <p>{log.descriptionOfWork}</p>
                      </div>
                      ))
                    ) : (null)} */}

                  </ListGroupItem>
                </CSSTransition>
              </TransitionGroup>
            </ListGroup>
          ))

        ) : (null)}

      </Container>
    )
  }
}

const styles = {
  wrapper: {
    margin: 10
  },
  messageContainer: {

  },
  message: {

  },
  deleteButton: {
    margin: 5
  }
}

jobDetails.propTypes = {
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

  })(jobDetails);