import React from 'react';
import { Row, Col } from 'reactstrap';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';


export default function ContactInfo() {
  return (
    <div>
      <div>
        <h3>tristan.e.perera@gmail.com</h3>        
      </div>
      
      <div>
      <h3>562.555.5555</h3>        
      </div>

        <Row>
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
