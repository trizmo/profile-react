import React from 'react'
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'

export default function SkillCard(props) {
  return (
          <Card>
            <CardImg top width="100%" src={props.img} className="text-center"/>
            <CardBody>
              <CardTitle style={styles.cardTitle}>{props.name}</CardTitle>
              <CardText style={styles.fontSize}>{props.text}</CardText>
            </CardBody>
          </Card>
  )    
}

const styles = {
  cardTitle: {
    fontSize: "1.8em"
  },
  cardText: {
    fontSize: "1.25em"
  }
}