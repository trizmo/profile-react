import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'


import WorkCard from './WorkCard';
import projectsData from '../data/projects';
import { Spring } from 'react-spring/renderprops-universal';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projectsData,
      show: false,
    }
  }

  toggle = () => {
    this.setState(state => {
      return {
        show: !state.show
      };
    }, () => console.log(this.state.show));
  };


  render() {
    return (
      <div>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >

          {props => (
            <div style={{ ...styles.mainText, ...props }} className="text-center">
              Building projects for businesses, with friends, or just for fun.
</div>
          )}


        </Spring>
        <Spring
          delay={300}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          {props => (
            <div style={{ ...styles.mainContainer, ...props }} className={"text-center"}>


              {this.state.projects.map(project => {
                return (

                  <Spring
                    to={{
                      width: this.state.show ? '340px' : '330px'
                    }}
                  >
                    {styles => (

                      <div
                        onMouseEnter={() => this.toggle()}
                        onMouseLeave={() => this.toggle()}
                        style={{
                          display: "flex",
                          flex: 1,
                          margin: 10,
                          flex: "1 0 31%",
                          margin: 5,
                          ...styles
                        }}
                        key={project.id}>
                        <WorkCard
                          data={project}
                        // style={styles}
                        />
                      </div>
                    )}
                  </Spring>
                )
              })}

            </div>
          )}


        </Spring>


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
    // boxShadow: "0px 0px 10px lightgrey",
    margin: 10
  },
  mainContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: "1.5em"
  },
  workCardContainer: {
    display: "flex",
    flex: 1,
    margin: 10,
    flex: "1 0 21%",
    margin: 5,
  }
}
