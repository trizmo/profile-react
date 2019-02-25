import React from 'react';
import { Container, Row, Col, NavLink, Button } from 'reactstrap';

const Footer = () => {
  return (
    <Container fluid className="text-center text-md-left" style={styles.mainFooter}>
      <Container style={styles.containerStyle}>

      <Row>
        <Col>
          <Button block>GitHub</Button>
        </Col>
        <Col>
          <Button block>LinkedIn</Button>
        </Col>
        <Col>
          <Button block>Twitter</Button>
        </Col>
        <Col>
          <Button block>InstaGram</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <p>tristan.e.perera@gmail.com</p>
        </Col>
        <Col>
          <p>562.555.5555</p>
        </Col>
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
    
  }

}

export default Footer;