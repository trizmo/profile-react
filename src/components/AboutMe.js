import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import MyResume from '../data/resume/resume.pdf'
import profilPic from '../assets/profile1.png'
import Resume from './Resume'

// const profilPic = "../assets/profile-tristan2.jpg"

export default class AboutMe extends Component {

  constructor(props){
    super(props);
    this.state = {
      resume : MyResume
    }
  }

  returnProfilePic() {
    return <img src={profilPic} alt="Logo" style={
      {
        maxHeight:"400px",
        borderRadius: 5

      }    
    }  />;
  }

  render() {
    return (
      <Container>

        <Container className="text-center">
          <Row>

            <Col style={styles.mainSection}>
              <div style={styles.mainName}>
                Tristan Perera
              </div>
              <div style={styles.mainTitle}>
                Software Engineer
              </div>
              <div>
              A passionate developer and a quick learner with experience in mobile development, Internet of Things, and in back-end and front-end web development. 
              I am always looking to better myself and learn new things. Consistently growing, I bring a high quality value to any team by bringing positive energy, exceptional problem solving skills, and high Self-Efficacy.
              </div>

              <Button outline size="lg" color="primary" href={this.state.resume} download="Tristan Perera - Software Engineer.pdf">
                Download My Resume
              </Button>
            
            </Col>

            <Col style={
                {
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center"
                }
              }>
              <div>
                {this.returnProfilePic()}
              </div>
            </Col>

          </Row>
        </Container>

        <div style={styles.mainText} className="text-center">
          Check out my Experience
        </div>

        <Container style={styles.resumeSection}>
          <Resume />
        </Container>


      </Container>

    )
  }
}

const styles = {
  mainSection: {
    color: "#04030F",
    padding: 35,
    fontSize: "2em",
    backgroundColor: "#fff",
    marginTop: 0,
    marginBottom: 20,
    borderRadius: 5,
    alignItems: "left",
    boxShadow: "0px 0px 20px lightgrey"
  },
  resumeSection: {
    color: "#04030F",
    padding: 5,
    backgroundColor: "#fff",
    marginTop: 0,
    marginBottom: 20,
    borderRadius: 5,
    alignItems: "left",
    boxShadow: "0px 0px 20px lightgrey"
  },
  standard: {
    display: "flex",
    color: "#04030F",
    padding: 5,
    fontSize: "2em",
    margin: 15,
    backgroundColor: "darkgrey",
    borderRadius: 5,
  },
  mainName: {
    color: "#04030F",
    fontSize: "2em",
  },
  mainTitle: {
    color: "grey",
    fontSize: ".8em",
    fontFamily: "HomeMade Apple"
  },
  mainText: {
    color: "#04030F",
    padding: 35,
    fontSize: "2em",
    backgroundColor: "#fff",
    borderRadius: 5,
    boxShadow: "0px 0px 10px lightgrey",
    margin: 10,
  },
}
