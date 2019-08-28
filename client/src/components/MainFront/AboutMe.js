import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Spring } from 'react-spring/renderprops';

import MyResume from '../../data/resume/resume.pdf'
import profilPic from '../../assets/profile1.png'
import Resume from '../Portfolio/Resume'
import Contact from '../Contact/Contact';
import Skillz from '../Skills/Skillz';
import Portfolio from '../Portfolio/Portfolio';

// const profilPic = "../assets/profile-tristan2.jpg"

export default class AboutMe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      resume: MyResume
    }
  }

  returnProfilePic() {
    return <img src={profilPic} alt="Logo" style={
      {
        maxHeight: "400px",
        borderRadius: 5

      }
    } />;
  }

  render() {
    return (
      <div>


        <Container className="text-center">
          <Row>
            <Col style={styles.mainSection}>
              <Spring
                from={{
                  textShadow: '0px 0px 0px black',
                  fontSize: "1.5rem"
                }}
                to={{
                  textShadow: '1px 1px 3px black',
                  fontSize: "4rem"
                }}
              >
                {props =>
                  <div style={props}>
                    Tristan Perera
                  </div>
                }
              </Spring>
              <Spring
                delay={125}
                from={{
                  opacity: 0,
                  marginLeft: 0
                }}
                to={{
                  opacity: 1,
                  marginLeft: 80
                }}
              >
                {props =>
                  <div style={props}>
                    Software Engineer
                      </div>
                }
              </Spring>
              <Spring
                delay={250}
                from={{
                  opacity: 0,
                }}
                to={{
                  opacity: 1,
                }}
              >
                {props =>
                  <div style={props}>
                    A passionate developer and a quick learner with experience in mobile development, Internet of Things, and in back-end and front-end web development.
                    I am always looking to better myself and learn new things. Consistently growing, I bring a high quality value to any team by bringing positive energy, exceptional problem solving skills, and high Self-Efficacy.
                  </div>}
              </Spring>

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
              <Spring
                delay={250}
                from={{
                  opacity: 0,
                }}
                to={{
                  opacity: 1,
                }}
              >
                {props =>
                  <div style={{ ...styles.profilepic, ...props }}>
                    {this.returnProfilePic()}
                  </div>
                }
              </Spring>

            </Col>

          </Row>
        </Container>


        {/* <div style={styles.mainText} className="text-center">
            Check out my Experience
        </div> */}

        <div style={styles.resumeSection}>

          <Spring
            delay={375}
            from={{
              opacity: 0,
            }}
            to={{
              opacity: 1,
            }}
          >
            {props =>

              <Resume style={props} />
            }
          </Spring>

        </div>
      </div>

    )
  }
}

const styles = {
  mainSection: {
    color: "#04030F",
    padding: 35,
    fontSize: "2em",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    marginTop: 0,
    marginBottom: 20,
    borderRadius: 5,
    alignItems: "left",
    // boxShadow: "0px 0px 20px grey"
  },
  resumeSection: {
    color: "#04030F",
    padding: 5,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    marginTop: 0,
    marginBottom: 20,
    borderRadius: 5,
    alignItems: "left",
    // boxShadow: "0px 0px 20px lightgrey"
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
    boxShadow: "0px 0px 10px grey",
    margin: 10,
  },
  profilepic: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
}
