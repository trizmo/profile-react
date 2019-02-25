import React from 'react';
import { Row, Col } from 'reactstrap';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';


export default function ContactInfo() {
  return (
    <div>
      <div style={styles.email} className="text-center">
        <h3>tristan.e.perera@gmail.com</h3>        
      </div>
      
      <div style={styles.phoneNumber} className="text-center">
      <h3>562.555.5555</h3>        
      </div>

        <Row style={styles.socialMedia} className="text-center">
          <Col>
          <FaGithub style={{fontSize: "2em"}} /> Github
          </Col>
          <Col>
          <FaLinkedin style={{fontSize: "2em"}} /> LinkedIn
          </Col>
          <Col>
          <FaFacebook style={{fontSize: "2em"}} /> Facebook
          </Col>
          <Col>
          <FaTwitter style={{fontSize: "2em"}} /> Twitter
          </Col>
        </Row>
    </div>
  )
}
const styles = {
  email: {
    padding: 20,
  },
  phoneNumber: {
    padding: 20,
  },
  socialMedia: {
    padding: 20,
  },
}
