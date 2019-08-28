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
// import { Link } from 'react-router-dom'

// REDUX
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// COMPONENTS
import Logout from './Logout'

class NavBar extends Component {

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { isAuthenticated } = this.props.auth

    const authenticated = (
      <Nav navbar className="ml-auto" style={styles.navLinks}>
        <NavItem>
          <Logout />
        </NavItem>
      </Nav>
    )

    const noUser = (
      <Nav navbar className="ml-auto" style={styles.navLinks}>
        <NavItem>
          <NavLink href="/portfolio" to="/portfolio"> portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/skills" to="/skills"> skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/resume" to="/resume"> resume</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact" to="/contact"> contact </NavLink>
        </NavItem>
      </Nav>
    )

    return (
      <div>
        <Navbar color="none" light expand="sm" className="mb-5" style={styles.navi}>
          <Container>
            <NavbarBrand href="/" style={styles.mainHead}> Tristan Perera | Software Engineer </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>

              {isAuthenticated ? authenticated : noUser}


            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

const styles = {
  navi: {
    // padding: 0,
    // margin: 0
  },
  mainHead: {
    // fontFamily: "Nunito, sans-serif",
    // fontFamily: "Dosis, sans-serif",
    // fontFamily: "Karla, sans-serif",
    // fontFamily: "Indie Flower, cursive",
    // fontFamily: "Didact Gothic, sans-serif",
    // fontFamily: "HomeMade Apple",
    fontFamily: 'Overpass',
    // fontFamily: 'M PLUS 1p',
    // fontFamily: 'Sarala',
    textDecoration: "none",
    color: "#fff",
    fontSize: "2.00em",
    fontWeight: 600,
    paddingTop: 10,
  },
  navLinks: {
    fontSize: "1.5em",
    // width: "90%",
    fontWeight: 750
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})


export default connect(mapStateToProps, null)(NavBar)