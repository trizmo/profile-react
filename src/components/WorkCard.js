import React from 'react'
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap'


export default function WorkCard(props) {
  return (

    <Card>
      <CardImg top width="100%" src={props.img} className="text-center" />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.description}</CardText>
        <CardText>{props.repoLink}</CardText>
      </CardBody>
    </Card>

  )
}
