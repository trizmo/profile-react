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


class DBNavBar extends Component {

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


    return (
      <div>
        <Navbar color="light" light expand="sm" className="mb-5" style={styles.navi}>
          <Container>
            <NavbarBrand href="/lejonbrames" style={styles.mainHead}> Welcome Back, Mr. Perera </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>

              <Nav navbar className="ml-auto" style={styles.navLinks}>
                <NavItem>
                  <NavLink href="/lejonbrames/messages" to="/lejonbrames/messages"> Messages</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/lejonbrames/jobs" to="/lejonbrames/jobs"> Jobs</NavLink>
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


export default connect(mapStateToProps, null)(DBNavBar)