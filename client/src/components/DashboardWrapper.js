import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { HashRouter, Route, Switch } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import JobDetails from './AdminPanel/JobDetails/JobDetails'
import ContactMessages from './AdminPanel/Messages/Messages'
import Overview from './AdminPanel/Overview/Overview'

class DashboardWrapper extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth
    return (
      <Container style={styles.mainContainer}>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/lejonbrames/" component={Overview} />
            <Route exact path="/lejonbrames/messages" component={ContactMessages} />
            <Route exact path="/lejonbrames/jobs" component={JobDetails} />
          </Switch>
        </HashRouter>
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