import React, { Component } from 'react'

import SkillCard from './SkillCard'

export default class Skillz extends Component {

    constructor(props){
      super(props);
      this.state = {
        skills: [
          {
            name: "Javascript",
            img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            level: 90,
            text: "I had been developing my fundamental skills as a programmer with Python, but it wasn't until I met JavaScript, I had realized the true power of my typing on a keyboard. I love it's asynchronous nature, it's ease of use, and it's availabliity (all you need is a browser!)"
          },
          {
            name: "React Native",
            img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            level: 82,
            text: "My beloved React Native- you are the reason for my existance"
          },
          {
            name: "NodeJS",
            img: "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png",
            level: 85,
            text: "Server side scripting and just scripting in general is one of the main reason why I wanted to program- Thanks NodeJS!"
          },
          {
            name: "ExpressJS",
            img: "https://vegibit.com/wp-content/uploads/2018/05/expressjs.png",
            level: 86,
            text: "Server side scripting and just scripting in general is one of the main reason why I wanted to program- Thanks NodeJS!"
          },
          {
            name: "Mongo",
            img: "https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg",
            level: 73,
            text: "NoSQL style databases are a gift from God. I mean, I love SQL Queries, but Mongo just takes the cake when it comes to set up, functionality, and it's ease of use. "
          },
          {
            name: "MySQL",
            img: "https://png2.kisspng.com/sh/8236b0485b754af21a6b29b9d6cb869c/L0KzQYm3WME1N6R3kpH0aYP2gLBuTf16e6JxRd54Z3AwdLL7gfJie5YyiNH7dHHlfLa0jvV1f5D3g59wcnHzeLrqk71qdZJsRd9Ec4HvPb32hB8uf6h8ReJyeIPrccPyTfNwdV5uhdNwZYOwd7LzjPVzcZZ4RelydD24coi6Wck6OpM4edNsOD63SYG9WMMyOGI6S6Y8MEK5QYGAU8U6NqFzf3==/kisspng-mysql-logo-database-portable-network-graphics-imag-mysql-logo-www-pixshark-com-images-galleries-wit-5b739992b3aac8.4906831015343026107359.png",
            level: 60,
            text: "MySQL is one of the most important databases in the technology sector. It's robust, great accuracy"
          },
          {
            name: "FireBase",
            img: "https://firebase.google.com/images/brand-guidelines/logo-standard.png",
            level: 65,
            text: "I enjoy the ease of setting up a Firebase database for testing. The realtime updating is really fun and a nice feature."
          },
          {
            name: "Arudino | Internet Of Things",
            img: "https://342sv54cwf1w32bxz36tm0bv-wpengine.netdna-ssl.com/wp-content/uploads/2015/09/How-The-Internet-of-Things-will-Complicate-Incident-Response.png",
            level: 73,
            text: "Working with Internet of Things is actually quite important to me. Basically everything is going to be connected to the internet. Being able to work with these devices and have proper communication is one of my favorite hobbies!"
          },
        ]
      }
    }



    // renderSkills() {
    //   this.state.skills.map(skill => {
    //     return(
    //         <SkillCard 
    //         name={skill.name}
    //         level={skill.level}
    //         />
    //       )
    //       })
    // }
  


  render() {
    return (
      <div style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        // alignItems: "center",
        flexWrap: "wrap",
        // overflow: "auto",
        // justifyContent: "space-evenly",
        
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
