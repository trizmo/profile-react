import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import JobDetails from './JobDetails/JobDetails'
import ContactMessages from './Messages/Messages'
import Overview from './Overview/Overview'
import AddNewJob from './JobDetails/AddNewJob';
import AddTimeLog from './JobDetails/AddTimeLog';

class DashboardWrapper extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth
    return (
      <Container style={styles.mainContainer} className="DashboardWrapper-main-div">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/lejonbrames/" component={Overview} />
            <Route exact path="/lejonbrames/messages" component={ContactMessages} />
            <Route exact path="/lejonbrames/jobs" component={JobDetails} />
            <Route exact path="/lejonbrames/jobs/addnewjob" component={AddNewJob} />
            <Route path="/lejonbrames/jobs/addtimelog/" component={AddTimeLog} />
          </Switch>
        </BrowserRouter>
      </Container>
    )
  }
}

const styles = {
  mainContainer: {
    marginBottom: 25
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})


export default connect(mapStateToProps, null)(DashboardWrapper)