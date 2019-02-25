import React from 'react'
import { Card, CardBody, CardTitle, CardText, CardImg, Button } from 'reactstrap'


export default function WorkCard(props) {
  return (

    <Card>
      <CardImg top width="100%" src={props.img} className="text-center" />
      <CardBody style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"}}>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.description}</CardText>
        <Button href={props.repoLink} target="_blank">Repo</Button>
      </CardBody>
    </Card>

  )
}
