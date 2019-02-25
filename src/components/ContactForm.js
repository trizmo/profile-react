import React from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

export default function ContactForm() {
  return (
    <Form>
      <FormGroup>
        <Label for="contactEmail">Email</Label>
        <Input type="email" name="email" id="contactEmail" placeholder="Enter Your Email..."/>
      </FormGroup>
      
      <FormGroup>
        <Label for="contactName">Name</Label>
        <Input type="text" name="name" id="contactName" placeholder="Enter Your Name..."/>
      </FormGroup>
      
      <FormGroup>
        <Label for="contactMessage">Message</Label>
        <Input type="textarea" name="message" id="contactMessage" />
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  
  )
}

