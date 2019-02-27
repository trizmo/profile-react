import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import MyResume from '../data/resume/resume.pdf'

const profilPic = "https://s3-us-west-1.amazonaws.com/co-directory-images/tristan-perera-9ab28682.jpg"

export default class AboutMe extends Component {

  constructor(props){
    super(props);
    this.state = {
      resume : MyResume
    }
  }

  returnProfilePic() {
    return <img src={profilPic} alt="Logo" style={{maxWidth:"500px"}}/>;
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
                FullStack Developer
              </div>
              <div>
                Self-driven web developer with FullStack skills in current industry standards. Passionate about what these technological tools can do to help people achieve their goals, I'm more than eager to problem solve and help innovate. Always looking to better myself, learn new things and to be a valuable asset to any team by bringing my positive energy, and my exceptional problem solving skills
              </div>

              <Button outline size="lg" color="primary" href={this.state.resume} download="Tristan Perera - Software Engineer.pdf">
                {console.log(MyResume)}
                Download My Resume
              </Button>
            
            </Col>

            <Col>
              <div>
                {this.returnProfilePic()}
              </div>
            </Col>

          </Row>
        </Container>

        <div style={styles.standard}>
          <ul>
            <li>Languages: JavaScript / ES7 | HTML5 | CSS</li>
            <li>Frameworks: ReactNative | React | Express.js</li>
            <li>Databases: MySQL, Sequelize | Firebase | Mongo, Mongoose</li>
            <li>Technologies: Github | Git | Trello | ZenHub | KanBanFlow</li>
          </ul>
        </div>

        <div style={styles.standard}>
          <ul>
            <li>Languages: JavaScript / ES7 | HTML5 | CSS</li>
            <li>Frameworks: ReactNative | React | Express.js</li>
            <li>Databases: MySQL, Sequelize | Firebase | Mongo, Mongoose</li>
            <li>Technologies: Github | Git | Trello | ZenHub | KanBanFlow</li>
          </ul>
        </div>


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
}
