import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import ContactForm from './ContactForm'
import ContactInfo from './ContactInfo'

export default class Contact extends Component {
  render() {
    return (
      <div>

        <div style={styles.mainText} className="text-center">
          Let's see what we can build together!
        </div>
        
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactInfo />
          </Col>
        </Row>



      </div>
    )
  }
}

const styles = {
  mainText: {
    color: "#04030F",
    padding: 35,
    fontSize: "2em",
    backgroundColor: "#fff",
    borderRadius: 5,
    boxShadow: "0px 0px 10px lightgrey",
    margin: 10
  }
}