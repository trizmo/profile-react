import React from 'react';
import { Container } from 'reactstrap';

// COMPONENTS
import Messages from './Messages/Messages'
import JobDetails from './JobDetails/JobDetails';
import DBNavBar from './DBNav/DBNavBar';
import DashboardWrapper from './DashboardWrapper'

export default function Dashboard() {
  return (
    <Container>
      <div>
        <DBNavBar />
        <DashboardWrapper />

      </div>
    </Container>
  )
}