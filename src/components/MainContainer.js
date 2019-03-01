import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { HashRouter , Route, Switch } from 'react-router-dom';

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
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </HashRouter>

      </Container>
    )
  }
}

const styles ={
  mainContainer: {
    marginBottom: 200
  }
}