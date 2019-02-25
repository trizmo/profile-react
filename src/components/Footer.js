import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container fluid className="text-center text-md-left" style={styles.mainFooter}>
      <Container style={styles.containerStyle} className="text-center">

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

        <Row style={{marginTop: 10}}>
            <p>tristan.e.perera@gmail.com</p>
        </Row>

        <Row>
            <p>562.555.5555</p>
        </Row>

      </Container>
    </Container>
  );
}

const styles = {
  mainFooter: {
    position: "fixed",
    width: "100%",
    bottom: 0,
    backgroundColor: "#393D3F",
    color: "lightgrey",
    boxShadow: "0px 1px black",
    marginTop: 0,
    height: 150
  },
  containerStyle: {
    padding: 50,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"

  }

}

export default Footer;