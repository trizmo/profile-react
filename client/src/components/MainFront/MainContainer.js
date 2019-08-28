import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import AboutMe from './AboutMe';
import Portfolio from '../Portfolio/Portfolio'
import Skills from '../Skills/Skillz'
import Contact from '../Contact/Contact'
import Resume from '../Portfolio/Resume'
import Login from '../MainFront/Login'
import Dashboard from '../AdminPanel/Dashboard'
import { callbackify } from 'util';
import MainSkills from '../Skills/MainSkills';

class MainContainer extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth

    const userDashboard = (
      <Dashboard />
    )

    const noUser = (
      <div style={styles.mainContainer}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/lejonbrames" component={Login} />
            <Route exact path="/test" component={MainSkills} />
          </Switch>
        </BrowserRouter>
      </div>
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
    marginBottom: 20,
    minHeight: "calc(100vh - 62px - 134.5px)",
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})


export default connect(mapStateToProps, null)(MainContainer)