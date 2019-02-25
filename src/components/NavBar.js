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
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/"> Tristan Perera | Fullstack Developer </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>

              <Nav navbar className="m-auto">
                <NavItem>
                  <NavLink href="/portfolio/"> &lt; &frasl; portfolio &gt; </NavLink>
                  <NavLink href="/skills/"> &lt; &frasl; skills and abilities &gt; </NavLink>
                </NavItem>
              </Nav>

              <Nav navbar className="">
                <NavItem>
                  <NavLink href="https://www.linkedin.com/in/tristan-perera/" target="_blank"> &lt; &frasl; LinkedIn &gt; </NavLink>
                </NavItem>
              </Nav>

            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
