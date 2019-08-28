import React from 'react';
import { Container } from 'reactstrap';
import { FaPiedPiperAlt } from 'react-icons/fa';


export default function WebAppDev() {
  return (
    <Container style={styles.container}>

      <div style={styles.title}>
        Web Application Development
      </div>

      <div style={styles.icon}>
        <FaPiedPiperAlt />
      </div>

      <div style={styles.info}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </Container>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "lightgrey",
    backgroundColor: "rgba(20, 55, 75, .30)",
    margin: 5,
    padding: 5,
  },
  title: {
    display: "flex",
    flexBasis: "50%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.75rem",
    fontWeight: "600"
  },
  icon: {
    display: "flex",
    flexBasis: "50%",
    fontSize: "15rem",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    display: "flex",
    flexBasis: "50%",
    fontSize: "1.5rem",
    color: "white",
  }
}
