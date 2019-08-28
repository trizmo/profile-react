import React, { Component } from 'react';
import { Container } from 'reactstrap';

import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

export default class Contact extends Component {
  render() {
    return (
      <Container>

        <div style={contactStyles.mainText} className="text-center">
          Let's see what we can build together!
        </div>

        <div style={contactStyles.mainContainer}>
          <ContactInfo style={contactStyles.item}/>
          <ContactForm style={contactStyles.item}/>
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
    justifyContent: "space-evenly",
    // flex: "1 0 48%",
    // flexWrap: "nowarap"
  },
  item: {
    display: "flex",
    flexBasis: "50%",
  //   justifyContent: "center",
  //   alignItems: "center",
    // fontSize: "1.75rem",
  //   fontWeight: "600"
  },
}
