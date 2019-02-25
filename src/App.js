import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import NavBar from './components/NavBar';
import MainContainer  from './components/MainContainer';
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
        <div>
          <NavBar />
          <MainContainer />
          <Footer />
        </div>
    );
  }
}

export default App;
