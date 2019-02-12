import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';


class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <NavBar />
          <Switch>
            <Route exact path="/" component="Home"/>
            <Route exact path="/portfolio" component="Portfolio"/>
          </Switch>
        
        </div>
      </Router>
    );
  }
}

export default App;
