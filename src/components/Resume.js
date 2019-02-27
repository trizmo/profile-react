import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';

import expData from '../data/projects.json';
import skillData from '../data/skillz.json';
import MyResume from '../data/resume/resume.pdf'


export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: expData,
      skills: skillData,
      resume: MyResume

    }
  }

  render() {
    return (

      <Container style={resumeStyles.mainContainer}>
        {/* <div style={resumeStyles.mainHead}>
            <span>My Resume</span>
          </div> */}


        <Container style={resumeStyles.workContainer}>
          <div style={resumeStyles.head}>
            <span>My Work Experiences</span>
          </div>

          {this.state.experience.map(exp => (
            (exp.type === "work") ?
              (
                <div style={resumeStyles.exxp}>
                  <span style={resumeStyles.name}>{exp.name} | </span>
                  <span style={resumeStyles.projectPeriod}>{exp.projectPeriod}</span>
                  <p style={resumeStyles.description}>{exp.description}</p>
                  {exp.accomplishments.map(accomp => (
                    <ul>
                      <li>{accomp}</li>
                    </ul>
                  ))}
                  <a href={exp.repoLink}><p>Github Repo</p></a>
                </div>
              ) : (console.log(""))
          ))}
        </Container>

        <Container style={resumeStyles.projectContainer}>
          <div style={resumeStyles.head}>
            <span>My Projects</span>
          </div>

          {this.state.experience.map(exp => (
            (exp.type === "project") ? (
              <div style={resumeStyles.exxp}>
                <p style={resumeStyles.name}>{exp.name}</p>
                <p style={resumeStyles.description}>{exp.description}</p>
                {exp.accomplishments.map(accomp => (
                  <ul>
                    <li>{accomp}</li>
                  </ul>
                ))}
                <a href={exp.repoLink}><p>Github Repo</p></a>

              </div>) : (console.log(""))

          ))}
        </Container>

        {/* <Container style={resumeStyles.workContainer}>
          <div style={resumeStyles.head}>
            <span>My Skills</span>
          </div>

          {this.state.skills.map(skill => (

            <div style={resumeStyles.skill}>
              <span style={resumeStyles.skillName}>{skill.name} </span>
            </div>

          ))}
        </Container> */}

        <Button outline size="lg" color="primary" style={{left: 0}} href={this.state.resume} download="Tristan Perera - Software Engineer.pdf">
          Download My Resume
        </Button>
      </Container>



    )
  }
}

const resumeStyles = {
  mainContainer: {
    fontSize: "1.3em",
  },
  exxp: {
    padding: 5,
    margin: 5,
    boxShadow: "0px 0px 3px lightgrey"
  },
  head: {
    fontSize: "1.125em"
  },
  name: {
    fontWeight: "bold"
  },
  mainHead: {
    fontSize: "1.75em",
    fontWeight: "bold"
  },
  projectPeriod: {
    fontStyle: "italic"
  },
  workContainer: {
    padding: 20
  },
  projectContainer: {
    padding: 20
  }
}
