import React from 'react'
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'

export default function SkillCard(props) {

 
  return (
 
          <Card>
            <CardImg top width="100%" src={props.img} className="text-center"/>
            <CardBody>
              <CardTitle>{props.name} | Skill Level: {props.level}</CardTitle>
              <CardText>{props.text}</CardText>
            </CardBody>
          </Card>


            // <div style={{
            //   fontSize: props.level, 
            //   borderColor: "black",
            //   borderWidth: 1
            // }}>
              
            //   {props.name}
            //   Skill Level: {props.level}
            
            // </div>
      
      
  )
    
    
    
}
  

// const skillStyles = {
//   fontSize: this.props.level, 
//   borderColor: "black",
//   borderWidth: 1
// }
