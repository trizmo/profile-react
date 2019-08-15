import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { connect } from 'react-redux';
import { addTimeLog } from '../../../store/actions/jobDetailsActions'


class AddTimeLog extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: "",
      numberOfHours: "",
      descriptionOfWork: "",
    }
  }

  componentDidMount(){
    // console.log(this.props.location.search)
    let jobId = this.props.location.search
    jobId = jobId.slice(1, jobId.length)
    // console.log(jobId)
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
    })
  }

  onSubmit = (event) => {
    // console.log(this.props.location.search)
    let jobId = this.props.location.search
    jobId = jobId.slice(1, jobId.length)
    // console.log(jobId)
    // event.preventDefault();
    // const { user } = this.props.auth
    const newTimeLog = {
      date: this.state.date,
      numberOfHours: this.state.numberOfHours,
      descriptionOfWork: this.state.descriptionOfWork
    }

    // replace with simple modal
    // alert("new time logged!")

    this.props.addTimeLog(newTimeLog, jobId);
    // console.log(newTimeLog, jobId)
    // alert(newTimeLog)
    // alert("jobId is: " + this.props.location)
    // console.log(this.props)

    // console.log("message sent!", newMessage)
  }


  render() {
    return (
      <div>

        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="date">Date</Label>
            <Input type="date" name="date" id="date" placeholder="date" onChange={this.onChange} />

            <Label for="numberOfHours">Number of Hours</Label>
            <Input type="numberOfHours" name="numberOfHours" id="starnumberOfHourstTime" placeholder="numberOfHours" onChange={this.onChange} />
            
            <Label for="descriptionOfWork">Description of Work</Label>
            <Input type="descriptionOfWork" name="descriptionOfWork" id="descriptionOfWork" placeholder="descriptionOfWork" onChange={this.onChange} />
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

export default connect(mapStateToProps, { addTimeLog })(AddTimeLog)
