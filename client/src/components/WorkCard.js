import React from 'react'
import { Card, CardBody, CardTitle, CardText, CardImg, Button, ListGroup, ListGroupItem } from 'reactstrap'


export default function WorkCard(props) {
  return (

        <Card style={props.style}>
          <CardImg top width="100%" src={props.data.img} className="text-center" />

            <CardBody style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <CardTitle style={workCardStyles.CardTitle}>{props.data.name}</CardTitle>
              <CardText>{props.data.description}</CardText>
              <Button href={props.data.repoLink} target="_blank" style={workCardStyles.button}>Repo</Button>
              <CardText>Technologies Used:</CardText>

                <ListGroup>
                  {props.data.techUsed.map(tech => (<ListGroupItem key={tech}> {tech} </ListGroupItem>))}
                </ListGroup>

              {props.data.liveLink ? (<Button href={props.data.liveLink} target="_blank" style={workCardStyles.button}>Live Link</Button>) : (null)}
            </CardBody>

        </Card>

  )
}

const workCardStyles = {
  button: {
    margin: 5
  },
  CardTitle: {
    fontSize: "1.2em",
    fontWeight: 600,
    textDecoration: "underline",
  }
}
