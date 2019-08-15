import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { connect } from 'react-redux';
import { addJobDetail } from '../../../store/actions/jobDetailsActions'


class AddNewJob extends Component {
  constructor(props){
    super(props);
    this.state = {
      jobNumber: "",
      jobName: "",
      clientName: "",
      contactName: "",
      contactPhone: "",
      contactEmail: "",
      shortDescription: "",
      longDescription: "",
    }
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
    })
  }

  onSubmit = (event) => {
    // event.preventDefault();
    const newJob = {
      jobNumber: this.state.jobNumber,
      jobName: this.state.jobName,
      clientName: this.state.clientName,
      contactName: this.state.contactName,
      contactPhone: this.state.contactPhone,
      contactEmail: this.state.contactEmail,
      shortDescription: this.state.shortDescription,
      longDescription: this.state.longDescription
    }

    
    this.props.addJobDetail(newJob);
    
    // replace with simple modal
    // alert("new job added!")

  }


  render() {
    return (
      <div>

        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="jobNumber">Job Number</Label>
            <Input type="jobNumber" name="jobNumber" id="jobNumber" placeholder="jobNumber" onChange={this.onChange}  />

            <Label for="jobName">Job Name</Label>
            <Input type="jobName" name="jobName" id="jobName" placeholder="jobName" onChange={this.onChange}  />

            <Label for="clientName">Client Name</Label>
            <Input type="clientName" name="clientName" id="clientName" placeholder="clientName" onChange={this.onChange}  />

            <Label for="contactName">Contact Name</Label>
            <Input type="contactName" name="contactName" id="contactName" placeholder="contactName" onChange={this.onChange}  />

            <Label for="contactPhone">Contact Phone</Label>
            <Input type="contactPhone" name="contactPhone" id="contactPhone" placeholder="contactPhone" onChange={this.onChange}  />

            <Label for="contactEmail">Contact eMail</Label>
            <Input type="contactEmail" name="contactEmail" id="contactEmail" placeholder="contactEmail" onChange={this.onChange}  />

            <Label for="shortDescription">Short Description</Label>
            <Input type="shortDescription" name="shortDescription" id="shortDescription" placeholder="shortDescription" onChange={this.onChange}  />

            <Label for="longDescription">Long Description</Label>
            <Input type="longDescription" name="longDescription" id="longDescription" placeholder="longDescription" onChange={this.onChange}  />
          </FormGroup>

          <Button>Submit</Button>
        </Form>

      </div>
    )
  }
}


const mapStateToProps = state => ({
  jobDetails: state.jobDetails,
  auth: state.auth
})

export default connect(mapStateToProps, { addJobDetail })(AddNewJob)