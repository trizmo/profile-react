import React, { Component } from 'react';
import { Container } from 'reactstrap';

import WorkCard from './WorkCard';
import projectsData from '../data/projects';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
      this.state = {
        projects: projectsData,
      }
  }
  render() {
    return (
      <Container>

      <div style={styles.mainText} className="text-center">
        Building projects for businesses, with friends, or just for fun.
      </div>

      <Container style={styles.mainContainer} className={"text-center"}>


        {this.state.projects.map(project => {
          return (
            
            <div style={{ display: "flex", flex: 1, margin: 10, }}>

              <WorkCard
                key={project.id}
                name={project.name}
                repoLink={project.repoLink}
                description={project.description}
                img={project.img}
                />

            </div>
          )
        })}


      </Container>
  </Container>
    )
  }
}

const styles = {
  mainText: {
    color: "#04030F",
    padding: 35,
    fontSize: "2em",
    backgroundColor: "#fff",
    borderRadius: 5,
    boxShadow: "0px 0px 10px lightgrey",
    margin: 10
  },
  mainContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: "1.5em"
  }
}
