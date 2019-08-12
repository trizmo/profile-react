import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

//REDUX
import { connect } from 'react-redux';
import { getJobDetails, deleteJobDetail } from '../../../store/actions/jobDetailsActions'

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
        {jobDetails !== undefined ? (
          jobDetails.map(job => (
            <ListGroup style={styles.wrapper}>
              <TransitionGroup>
                <CSSTransition>
                  <ListGroupItem style={styles.messageContainer}>
                    <div style={styles.message}>
                      <p>Job name: {<strong>{job.jobName}</strong>}</p>
                      <p>Client: {<strong>{job.clientName}</strong>}</p>
                      <p>Description: {<strong>{job.shortDescription}</strong>}</p>
                      <p>Start Date: {<strong>{job.enterDate}</strong>}</p>
                    </div>
                    <Button onClick={() => this.props.deleteJobDetail(job._id)} style={styles.deleteButton} color="danger">
                      Delete
                    </Button>
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