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
            <NavbarBrand href="/" style={styles.mainHead}> Tristan Perera | Software Engineer </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>

              <Nav navbar className="ml-auto" style={styles.navLinks}>
                <NavItem>
                  <NavLink href="/portfolio/"> &lt;&frasl;portfolio&gt;</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/skills/"> &lt;&frasl;skills and abilities&gt;</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact/"> &lt;&frasl;contact&gt; </NavLink>
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
    // padding: 0
  },
  mainHead: {
    // fontFamily: "HomeMade Apple",
    // fontFamily: 'Overpass',
    fontFamily: 'M PLUS 1p',
    // fontFamily: 'Sarala',
    textDecoration: "none",
    color: "#999",
    fontSize: "1.75em",
    fontWeight: 600,
    paddingTop: 10,
  },
  navLinks: {
    fontSize: "1.5em"
  }
}
