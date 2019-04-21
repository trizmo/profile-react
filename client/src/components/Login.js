import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../store/actions/authActions'
import { clearErrors } from '../store/actions/errorActions'

class LoginModal extends Component {
  state = {
    modal: false,
    email: '',
    password: '',
    msg: null
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;

    if (error !== prevProps.error) {
      // check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg })
      } else {
        this.setState({ msg: null })
      }
    }

    if (this.state.modal && isAuthenticated) {
      this.toggle()
    }
  }

  toggle = () => {
    // Clear Errors
    this.props.clearErrors();

    this.setState({
      modal: !this.state.modal
    })
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
    })
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state

    const user = {
      email,
      password
    }
    // Attempt to login user
    this.props.login(user)

    //closes modal
    this.toggle();
  }

  render() {
    return (
      <div>
        {/* <NavLink onClick={this.toggle}  href="#">
          Login
        </NavLink> */}

        <h5>ADMIN LOGIN</h5>

        {/* <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}> Login </ModalHeader>
          <ModalBody> */}
        <Form onSubmit={this.onSubmit}>
          <FormGroup>


            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={this.onChange}
              className="mb-3"
            />

            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={this.onChange}
              className="mb-3"
            />

            <Button
              color="dark"
              style={{ marginTop: "2rem" }}
              block
            >
              Login
                </Button>

            {this.state.msg ? <div style={styles.errorMSG}>{this.state.msg} </div> : null}
          </FormGroup>
        </Form>
        {/* </ModalBody>
        </Modal> */}

      </div>
    )

  }

}

const styles = {
  errorMSG: {
    color: "red",
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
})

export default connect(mapStateToProps,
  { login, clearErrors }
)(LoginModal)