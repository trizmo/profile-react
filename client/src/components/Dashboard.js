import React from 'react';
import { Container } from 'reactstrap';

// COMPONENTS
import Messages from './AdminPanel/Messages/Messages'
import JobDetails from './AdminPanel/JobDetails/JobDetails';
import DBNavBar from './AdminPanel/DBNav/DBNavBar';
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