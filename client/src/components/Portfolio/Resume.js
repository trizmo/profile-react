import React, { Component } from 'react';
import { Button } from 'reactstrap';



import expData from '../../data/projects.json';
import skillData from '../../data/skillz.json';
import MyResume from '../../data/resume/resume.pdf'
// import { FaRegIdBadge } from 'react-icons/fa';


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

      <div style={resumeStyles.mainContainer}>
        {/* <div style={resumeStyles.mainHead}>
            <span>My Resume</span>
          </div> */}


        <div style={resumeStyles.workContainer}>
          <div style={resumeStyles.head}>
            <span>Work Experience</span>
          </div>

          {this.state.experience.map(exp => (
            (exp.type === "work") ?
              (
                <div style={resumeStyles.exxp} key={exp.id}>
                  <span style={resumeStyles.name}>{exp.name} | </span>
                  <span style={resumeStyles.position}>{exp.position}</span>
                  <p style={resumeStyles.projectPeriod}>{exp.projectPeriod}</p>
                  <p style={resumeStyles.description}>{exp.description}</p>
                  {exp.accomplishments.map(accomp => (
                    <ul key={accomp}>
                      <li>{accomp}</li>
                    </ul>
                  ))}
                  <a href={exp.repoLink}><p>Github Repo</p></a>
                  {exp.liveLink ? (<a href={exp.liveLink} target="_blank"><p>Live Link</p></a>) : (null)}

                </div>
              ) : (null)
          ))}
        </div>

        <div style={resumeStyles.projectContainer}>
          <div style={resumeStyles.head}>
            <span>My Projects</span>
          </div>

          {this.state.experience.map(exp => (
            (exp.type === "project") ? (
              <div style={resumeStyles.exxp} key={exp.id}>
                <p style={resumeStyles.name}>{exp.name}</p>
                <p style={resumeStyles.description}>{exp.description}</p>
                {exp.accomplishments.map(accomp => (
                  <ul key={accomp}>
                    <li>{accomp}</li>
                  </ul>
                ))}
                <a href={exp.repoLink}><p>Github Repo</p></a>
                {exp.liveLink ? (<a href={exp.liveLink} target="_blank"><p>Live Link</p></a>) : (null)}

              </div>) : (null)

          ))}
        </div>

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

        <Button outline size="lg" color="primary" style={{ left: 0 }} href={this.state.resume} download="Tristan Perera - Software Engineer.pdf">
          Download Resume
        </Button>
      </div>



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
    // boxShadow: "0px 0px 3px lightgrey",
    backgroundColor: "rgba(255, 255, 255, 0.7)"
  },
  head: {
    fontSize: "1.125em",
    padding: 5
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
  position: {

  },
  workContainer: {
    padding: 0
  },
  projectContainer: {
    padding: 0
  }
}
