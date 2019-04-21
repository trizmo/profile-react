import React from 'react';
import { Container } from 'reactstrap';

// COMPONENTS
import Messages from './AdminPanel/Messages/Messages'

export default function Dashboard() {
  return (
    <Container>
      <div>
        <h5>Welcome back, Mr. Perera </h5>
        <Messages />
      </div>
    </Container>
  )
}