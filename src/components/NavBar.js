import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

export default class NavBar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5" style={styles.navi}>
          <Container>
            <NavbarBrand href="/" style={styles.mainHead}> Tristan Perera | Fullstack Developer </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>

              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink href="/portfolio/"> &lt; &frasl; portfolio &gt;</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/skills/"> &lt; &frasl; skills and abilities &gt;</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact/"> &lt; &frasl; contact &gt; </NavLink>
                </NavItem>
              </Nav>

            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

const styles = {
  navi: {
    padding: 0
  },
  mainHead: {
    fontFamily: "HomeMade Apple",
    textDecoration: "underline",
    color: "#999",
    fontSize: 16
  }
}
