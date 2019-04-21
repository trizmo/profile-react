import axios from 'axios';
import { GET_CONTACTMESSAGES, ADD_CONTACTMESSAGE, DELETE_CONTACTMESSAGE, CONTACTMESSAGES_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions'

export const getContactMessages = () => dispatch => {
  dispatch(setContactMessagesLoading());
  axios
    .get('/api/messages')
    .then(res =>
      dispatch({
        type: GET_CONTACTMESSAGES,
        payload: res.data
      })
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}


export const deleteContactMessage = id => (dispatch, getState) => {
  axios
    .delete(`/api/messages/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_CONTACTMESSAGE,
        payload: id
      })
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))


}

export const addContactMessage = newContactMessage => (dispatch, getState) => {
  axios
    .post('/api/messages', newContactMessage, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: ADD_CONTACTMESSAGE,
        payload: res.data
      })
    )
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))

}

export const setContactMessagesLoading = () => {
  return {
    type: CONTACTMESSAGES_LOADING
  }
}
