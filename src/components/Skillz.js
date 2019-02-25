import React, { Component } from 'react'

import SkillCard from './SkillCard'
import SkillsData from '../data/skillz'

export default class Skillz extends Component {

    constructor(props){
      super(props);
      this.state = {
        skills: SkillsData,
      }
    }

  render() {
    return (
      <div style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
      }} 
      
      className={"text-center"} 
      
      >

      {this.state.skills.map(skill => {
        return(
          
          <div
          style={{
            display: "flex",
            flex: 1,
            margin: 10,
          }}
          >

            <SkillCard 
            name={skill.name}
            level={skill.level}
            text={skill.text}
            img={skill.img}
            />

          </div>
        )
      })}


      </div>
    )
  }
}

