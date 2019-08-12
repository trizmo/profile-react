import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

export default class Contact extends Component {
  render() {
    return (
      <Container>

        <div style={contactStyles.mainText} className="text-center">
          Let's see what we can build together!
        </div>

        <div styles={contactStyles.mainContainer}>
          <ContactInfo />
          <ContactForm />
        </div>



      </Container>
    )
  }
}

const contactStyles = {
  mainText: {
    color: "#04030F",
    padding: 35,
    fontSize: "2em",
    backgroundColor: "#fff",
    borderRadius: 5,
    // boxShadow: "0px 0px 10px lightgrey",
    margin: 10
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
    // flexWrap: "nowarap"
  },
}
