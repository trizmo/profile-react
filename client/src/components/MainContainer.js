import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { HashRouter, Route, Switch } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import AboutMe from './AboutMe';
import Portfolio from './Portfolio'
import Skills from './Skillz'
import Contact from './Contact'
import Resume from './Resume'
import Login from './Login'
import Dashboard from './Dashboard'

class MainContainer extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth

    const userDashboard = (
      <Dashboard />
    )

    const noUser = (
      <Container style={styles.mainContainer}>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/lejonbrames" component={Login} />
          </Switch>
        </HashRouter>
      </Container>
    )

    return (
      <Container style={styles.mainContainer}>

        {isAuthenticated === true ? userDashboard : noUser}
        {/* {noUser} */}

      </Container>
    )
  }
}

const styles = {
  mainContainer: {
    marginBottom: 200
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})


export default connect(mapStateToProps, null)(MainContainer)