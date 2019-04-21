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
import { Link } from 'react-router-dom'

// REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
    const { isAuthenticated, user } = this.props.auth
    
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
        <NavLink href="/portfolio"  to="/portfolio"> &lt;&frasl;portfolio&gt;</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/skills" to="/skills"> &lt;&frasl;skills and abilities&gt;</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/resume"  to="/resume"> &lt;&frasl;resume&gt;</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/contact" to="/contact"> &lt;&frasl;contact&gt; </NavLink>
      </NavItem>
    </Nav>
    )
    
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5" style={styles.navi}>
          <Container>
            <NavbarBrand href="#/" style={styles.mainHead}> Tristan Perera | Software Engineer </NavbarBrand>
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
    fontSize: "1.4em",
    // width: "90%"
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})


export default connect(mapStateToProps, null)(NavBar)