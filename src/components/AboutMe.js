import React, { Component } from 'react'

export default class AboutMe extends Component {
  render() {
    return (
<div>

      <div style={styles.mainSection}>
      Self-driven web developer with FullStack skills in current industry standards. Passionate about what these technological tools can do to help people achieve their goals, I'm more than eager to problem solve and help innovate. Always looking to better myself, learn new things and to be a valuable asset to any team by bringing my positive energy, and my exceptional problem solving skills
      </div>
      
      <div style={styles.standard}>
        <ul>
          <li>Languages: JavaScript / ES7 | HTML5 | CSS</li>
          <li>Frameworks: ReactNative | React | Express.js</li>
          <li>Databases: MySQL, Sequelize | Firebase | Mongo, Mongoose</li>
          <li>Technologies: Github | Git | Trello | ZenHub | KanBanFlow</li>
        </ul>
      </div>
        
        <div className="jumbotron" style={styles.jumbo}>
        Lorem ipsum dolor sit amet, eirmod audiam utroque eam ad. Nostro disputando in qui. Ex sed tempor principes dignissim. Vidisse propriae cum eu, tota nihil libris ad his, nam impedit meliore verterem no. At tritani numquam mea, nam te utroque theophrastus.
        </div>
        
        <div style={styles.standard}>
        
        Movet adipiscing quaerendum mel ad, malis adipisci principes mel ut. Ei assentior neglegentur cum, omnesque appareat pertinax has id, eos ridens similique in. Eleifend consequuntur has an. Dolorum constituam ius ut. Numquam saperet fabellas ne qui, pri alterum adipisci temporibus no, cum noster docendi ad.

        </div>
</div>

    )
  }
}

const styles = {
  mainSection: {
    color: "#04030F",
    padding: 5,
    fontSize: "1em"
  },
  standard: {
    color: "#04030F",
    padding: 5,
    fontSize: "2em",
    margin: 15
  },
  jumbo:{
    color: "#04030F",
    padding: 55,
    fontSize: "2em"
  }
}
