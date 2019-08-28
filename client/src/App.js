import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Particles from 'react-particles-js';


// redux
import { Provider } from 'react-redux';
import store from './store/store';
import { loadUser } from './store/actions/authActions'

import './App.css';
import NavBar from './components/MainFront/NavBar';
import MainContainer from './components/MainFront/MainContainer';
import Footer from './components/MainFront/Footer'


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }

  render() {
    return (
      <Provider store={store}>
        <div
        //  style={styles.mainStyle}
        >
          <NavBar />
          <MainContainer />
          <Footer />
          {/* <Particles /> */}
        </div>
      </Provider>
    );
  }
}

// const styles = {
//   mainStyle: {
//     backgroundColor: "red"
//   }
// }

export default App;
