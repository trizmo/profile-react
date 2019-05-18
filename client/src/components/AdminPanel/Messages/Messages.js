import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

//REDUX
import { connect } from 'react-redux';
import { getContactMessages, deleteContactMessage } from '../../../store/actions/contactMessagesActions'

//COMPONENTS


class contactMessages extends Component {

  componentDidMount() {
    this.props.getContactMessages()
  }

  render() {
    const { isAuthenticated } = this.props.auth
    const contactMessages = this.props.contactMessages

    return (
      <Container>
        {/* {console.log(contactMessages.messages)} */}
        {contactMessages.messages.length > 0 ? (
          contactMessages.messages.map(msg => (
            <ListGroup style={styles.wrapper}>
              <TransitionGroup>
                <CSSTransition>
                  <ListGroupItem style={styles.messageContainer}>
                    <div style={styles.message}>
                      <p>{msg.name}</p>
                      <p>Sent: {msg.date}</p>
                      <p>{msg.email}</p>
                      <p>{msg.message}</p>
                    </div>
                    <Button onClick={() => this.props.deleteContactMessage(msg._id)} style={styles.deleteButton} color="danger">
                      Delete
                    </Button>
                  </ListGroupItem>
                </CSSTransition>
              </TransitionGroup>
            </ListGroup>
          ))

        ) : (

          <p>No new messages...</p>
            
          )}

      </Container>
    )
  }
}

const styles = {
  wrapper:{
    margin: 10
  },
  messageContainer: {

  },
  message: {

  },
  deleteButton: {

  }
}

contactMessages.propTypes = {
  contactMessages: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  contactMessages: state.contactMessages,
  auth: state.auth
})

export default connect(mapStateToProps,
  {
    getContactMessages,
    deleteContactMessage

  })(contactMessages);