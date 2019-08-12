import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container fluid className="text-center " style={styles.mainFooter}>
      <Container style={styles.containerStyle} className="text-center">

        <Row>
          <Col>
          <Button style={{ textDecoration: "none"}}>
            <a href="https://github.com/trizmo/" target="_blank" style={{ color: "white", textDecoration: "none" }}>
              <FaGithub style={{fontSize: "2em"}} /> 
              <span>&nbsp;Github</span>
            </a>
            </Button>
          </Col>
          <Col>
          <Button style={{ textDecoration: "none"}}>
            <a href="https://linkedin.com/in/tristan-perera/" target="_blank" style={{ color: "white", textDecoration: "none" }}>
              <FaLinkedin style={{fontSize: "2em"}} /> 
              <span>&nbsp;LinkedIn</span>
            </a>
            </Button>
          </Col>
          <Col>
          <Button style={{ textDecoration: "none"}}>
            <a href="https://twitter.com/lastskycaptain" target="_blank" style={{ color: "white", textDecoration: "none" }}>
              <FaTwitter style={{ fontSize: "2em" }} />
              <span>&nbsp;Twitter</span>
            </a>
          </Button>
          </Col>
        </Row>

        <Row style={styles.footerInfo}>
        <Col>
          <p>
            Phone: 562.204.6358
          </p>
          <p>
            Email: tristan.e.perera@gmail.com
          </p>
          <p>
            <a href="/lejonbrames">Admin Login</a>
          </p>
         </Col>
         <Col>
         {/* <p>
           Blog
         </p> */}
         <p>
           Download Resume
         </p>
         </Col>
        </Row>

        {/* <Row style={{marginTop: 10}}>
            <p>tristan.e.perera@gmail.com</p>
        </Row>

        <Row>
            <p>562.555.5555</p>
        </Row> */}

      </Container>
    </Container>
  );
}

const styles = {
  mainFooter: {
    position: "static",
    width: "100%",
    bottom: 0,
    backgroundColor: "#393D3F",
    color: "lightgrey",
    // boxShadow: "0px 0px 10px lightgrey",
    marginTop: 0,
  },
  containerStyle: {
    padding: 15,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  textStyleNone: {
    textDecorationLine: "none",
    textDecorationColor: "white",
  },
  footerInfo: {
    padding: 20,
  }


}

export default Footer;