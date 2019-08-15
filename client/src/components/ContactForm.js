import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

// REDUX
import { connect } from 'react-redux';
import { addContactMessage } from '../store/actions/contactMessagesActions';

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
    })
  }

  onSubmit = event => {
    // event.preventDefault();
    // const { user } = this.props.auth
    const newMessage = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }

    // replace with simple modal
    alert("message sent")

    this.props.addContactMessage( newMessage);
    // console.log("message sent!", newMessage)
  }



  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label for="contactEmail">Email</Label>
          <Input type="email" name="email" id="contactEmail" placeholder="Enter Your Email..." onChange={this.onChange}/>
        </FormGroup>

        <FormGroup>
          <Label for="contactName">Name</Label>
          <Input type="text" name="name" id="contactName" placeholder="Enter Your Name..." onChange={this.onChange}/>
        </FormGroup>

        <FormGroup>
          <Label for="contactMessage">Message</Label>
          <Input type="textarea" name="message" id="contactMessage" onChange={this.onChange}/>
        </FormGroup>

        <Button>Submit</Button>
      </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  contactMessage: state.contactMessage
})

export default connect(mapStateToProps, { addContactMessage })(ContactForm)
