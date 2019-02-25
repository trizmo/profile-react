import React, { Component } from 'react'

import WorkCard from './WorkCard';
import projectsData from '../data/projects'

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
      this.state = {
        projects: projectsData,
      }
  }
  render() {
    return (
      <div>

      <div style={styles.mainText} className="text-center">
        Building projects for businesses, with friends, or just for fun.
      </div>

      <div style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
      }}
      
      className={"text-center"}
      
      >


        {this.state.projects.map(project => {
          return (
            
            <div
            style={{
              display: "flex",
              flex: 1,
              margin: 10,
            }}>

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


      </div>
  </div>
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

  }
}
