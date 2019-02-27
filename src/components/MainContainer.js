import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import AboutMe from './AboutMe';
import Portfolio from './Portfolio'
import Skills from './Skillz'
import Contact from './Contact'
import Resume from './Resume'

export default class MainContainer extends Component {
  render() {
    return (
      <Container style={styles.mainContainer}>
        <Router>
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </Router>

      </Container>
    )
  }
}

const styles ={
  mainContainer: {
    marginBottom: 200
  }
}