import React from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';

const Footer = () => {
  return (
    // <Footer color="blue" className="font-small pt-4 mt-4">
    <Container fluid className="text-center text-md-left" style={footerStyles}>
      <Row>
        <Col md="6">
          <h5 className="title text-center">Full Stack React and React Native Developer</h5>

          <Row>
            Portfolio
          </Row>
          <Row>
            Email | tristan.e.perera@gmail.com
          </Row>
          <Row>
            Email | tristan.e.perera@gmail.com
          </Row>


        </Col>
        <Col md="6">

          <Row>
            <h5 className="title text-center m-auto">Socal Media</h5>
          </Row>


            <Row>

            <Col>
              <NavLink>LinkedIn</NavLink>
            </Col>
            <Col>
              <NavLink>Twitter</NavLink>
            </Col>
            <Col>
              <NavLink>FaceBook</NavLink>
            </Col>
            <Col>
              <NavLink>InstaGramk</NavLink>
            </Col>
      
            </Row>

            <Row>
          
          <Row>
            562.555.5555
          </Row>

          <Row>
            tristan.e.perera@gmail.com
          </Row>
          
            </Row>
  

          {/* <Row>
            <h5 className="title text-center m-auto">Contact</h5>
          </Row> */}

         


        </Col>
      </Row>
    </Container>
    // </Footer>
  );
}

const footerStyles = {
  position: "fixed",
  width: "100%",
  bottom: 0,
  backgroundColor: "#393D3F",
  color: "lightgrey",
  boxShadow: "0px 1px black",
  marginTop: 1800,
}

export default Footer;