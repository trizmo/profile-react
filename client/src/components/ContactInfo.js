import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';


export default function ContactInfo() {
  return (
    <div>
      <div style={styles.email} className="text-center">
        tristan.e.perera@gmail.com
      </div>

      <div style={styles.phoneNumber} className="text-center">
        (562) 204-6358
      </div>

      <Row style={styles.socialMedia} className="text-center">

        <Col>
          <a href="https://github.com/trizmo" target="_blank" style={{ textDecoration: "none" }}>
            <div style={styles.socialIcon} >
              <FaGithub />
            </div>
            Github
            </a>
        </Col>

        <Col>
          <a href="https://www.linkedin.com/in/tristan-perera/" target="_blank" style={{ textDecoration: "none" }}>
            <div style={styles.socialIcon} >
              <FaLinkedin />
            </div>
            LinkedIn
            </a>
        </Col>

        <Col>
          <a href="https://twitter.com/lastskycaptain" target="_blank" style={{ textDecoration: "none" }}>
            <div style={styles.socialIcon} >
              <FaTwitter />
            </div>
            Twitter
            </a>
        </Col>

      </Row>
    </div>
  )
}
const styles = {
  email: {
    padding: 20,
    fontSize: "1.75em",
  },
  phoneNumber: {
    padding: 20,
    fontSize: "1.75em",
  },
  socialMedia: {
    padding: 20,
  },

  socialIcon: {
    textDecoration: "none",
    fontSize: "2.5em"
  }
}
