import React, { Component } from 'react';
import { Container } from 'reactstrap';

import SkillCard from './SkillCard'
import SkillsData from '../data/skillz';

export default class Skillz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      skills: SkillsData,
    }
  }

  render() {
    return (
      <Container>



        <div style={styles.mainText} className="text-center">
          Learning different tools to complete different jobs.
    </div>


        <Container style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}

          className={"text-center"}

        >

          {this.state.skills.map(skill => {
            return (

              <div
                style={{
                  // display: "flex",
                  // flexDirection: "row",
                  // flexWrap: "wrap"
                  flex: 1,
                  margin: 5,
                }}
              >

                <SkillCard
                  key={skill.id}
                  name={skill.name}
                  level={skill.level}
                  text={skill.text}
                  img={skill.img}
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
  }
}

