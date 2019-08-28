import React, { Component } from 'react';
import { Container } from 'reactstrap';
import WebAppDev from './mainSkills/WebAppDev';
import MobileDev from './mainSkills/MobileDev';
import WebHosting from './mainSkills/WebHosting';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'


// import bg from '../../assets/bgs/bg1.png'
const bg = require('../../assets/bgs/bg2.png')
const bg3 = require('../../assets/bgs/bg3.png')

export default class MainSkills extends Component{
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.parallax = React.createRef();
  }

  render(){

    
    return (
      <Container className="parallaxDiv" style={styles.container}>

      <Parallax pages={3} scrolling={true} className="parallax" style={styles.parallax} ref={ref => (this.parallax = ref)}  > 

        {/* <ParallaxLayer offset={0} speed={1} style={{ backgroundColor: '#87BCDE' }} /> */}
        <ParallaxLayer offset={0} speed={1} factor={3} style={{ backgroundImage: `url(${bg3})`, backgroundRepeat: 'repeat' }} />
        <ParallaxLayer offset={1} speed={1} factor={3} style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'repeat' }} />


        <ParallaxLayer
          offset={0}
          speed={-0.5}
          onClick={() => this.parallax.scrollTo(1)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
          <WebAppDev />
        </ParallaxLayer>


        <ParallaxLayer
          offset={1}
          speed={-0.5}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
          <MobileDev />
        </ParallaxLayer>


        <ParallaxLayer
          offset={2}
          speed={-0.5}
          onClick={() => this.parallax.scrollTo(0)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
          <WebHosting />
        </ParallaxLayer>

      </Parallax>

    </Container>

// <Container style={styles.container}>
//   <WebAppDev />
//   <MobileDev />
//   <WebHosting />
// </Container>
)
}

}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "white",
    // backgroundImage: `url(${bg})`,
    // backgroundImage: bg,

  },
  parallax: {
    top: 0
    // backgroundColor: "white",
    // backgroundImage: `url(${bg})`,
    // backgroundImage: bg,

  },


}